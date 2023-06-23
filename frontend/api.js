const endpoint = "http://localhost/actvtyJune23/backend/";

// Cookie Functions --------------------------------
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function getUser() {
  fetch(endpoint + "getuser.php?id=" + getCookie("user_id"))
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#name").innerHTML =
        data.user.firstname + " " + data.user.lastname;
      console.log(data);
    });
}

function checkSession() {
  const userIDCookie = getCookie("user_id");
  if (userIDCookie) {
    window.location.replace("indexs.html");
  }
}

function checkLoggedInStatus() {
  const userIDCookie = getCookie("user_id");
  console.log(userIDCookie);
  if (!userIDCookie) {
    window.location.replace("login.html");
  }
}

// Store form variables

try {
  const loginForm = document.querySelector("#loginForm");
  loginForm.addEventListener("submit", login);
} catch (e) {}

try {
  const registrationForm = document.querySelector("#registrationForm");
  registrationForm.addEventListener("submit", register);
} catch (e) {}

try {
  const logoutButton = document.querySelector("#logout");
  logoutButton.addEventListener("click", logout);
} catch (e) {}

try {
  const newPostButton = document.querySelector("#newpost_btn");
  newPostButton.addEventListener("click", newPost);
} catch (e) {}

try {
const editForm = document.querySelector("#editForm");
editForm.addEventListener("submit", updateProfile);
} catch (e) {}

// Post Functions
function newPost() {
  const postContent = document.querySelector("#newpost").value;
  const dateTweeted = new Date().toISOString(); // Get the current date and time in ISO format
  fetch(endpoint + "createtweets.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: postContent,
      date_tweeted: dateTweeted,
      user_id: getCookie("user_id"),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#newpost").value = "";
      getPosts();
    });
}


function deleteTweet(tweetId) {
  fetch(endpoint + "deletetweet.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tweet_id: tweetId,
    }),
  })
    .then((response) => response.json())
    .then((data) => {

      console.log(data);
      getPosts();
    });
}

function getPosts() {
  fetch(endpoint + "gettweet.php")
    .then((response) => response.json())
    .then((data) => {
      let postHTML = "";
      data.forEach((post) => {
        postHTML += `
            <div class="card mt-4">
              <div class="card-body">
                <p class="fw-bold">${post.firstname} ${post.lastname}<span>${post.date_tweeted}</p>
                <p>${post.content}</p>
                <button class="btn btn-danger" onclick="deleteTweet(${post.tweet_id})">Delete</button>
              </div>
            </div>
            `;
      });
      document.querySelector("#newsfeed").innerHTML = postHTML;
    });
}


function login(event) {
  event.preventDefault();

  // get form data
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  fetch(endpoint + "login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Store user session in a cookie
        document.cookie = `user_id=${data.user_id}; expires=Thu, 18 Dec 2099 12:00:00 GMT`;

        window.location.replace("index.html");
      } else {
        alert(data.message);
      }
    });
}

function register(event) {
  event.preventDefault();

  // get form data
  const email = document.querySelector("#email").value;
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const birthdate = document.querySelector("#birthdate").value;
  const password = document.querySelector("#password").value;
  const confirm_password = document.querySelector("#confirm_password").value;

  if (password === confirm_password) {
    fetch(endpoint + "register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstname: firstname,
        lastname: lastname,
        birthdate: birthdate,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Registration successful!");
          window.location.replace("login.html");
        } else {
          alert("Email already exists!");
        }
      });
  } else {
    alert("Passwords do not match!");
  }
}

function logout() {
  fetch(endpoint + "logout.php")
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);

      // Clear session cookies
      document.cookie = `user_id=''; expires=Thu, 18 Dec 1970 12:00:00 GMT`;

      window.location.replace("login.html");
    });
}


// Function to display user information in the HTML page
function displayUserInfo(email, firstname, lastname, birthdate) {
  document.querySelector("#emailInfo").textContent = email;
  document.querySelector("#firstnameInfo").textContent = firstname;
  document.querySelector("#lastnameInfo").textContent = lastname;
  document.querySelector("#birthdateInfo").textContent = birthdate;
}

function updateProfile(event) {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const birthdate = document.querySelector("#birthdate").value;
  const password = document.querySelector("#password").value;

  const data = {
    email: email,
    firstname: firstname,
    lastname: lastname,
    birthdate: birthdate,
    password: password
  };

  fetch(endpoint + "changeprofile.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      if (result.success) {

        displayUserInfo(email, firstname, lastname, birthdate);

        alert(result.message);

        window.location.href = "index.html";
      } else {

        alert(result.message);
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
}


fetch(endpoint + "getuserinfo.php")
  .then(response => response.json())
  .then(result => {
    if (result.success) {
      const { email, firstname, lastname, birthdate } = result.data;
      displayUserInfo(email, firstname, lastname, birthdate);

      document.querySelector("#email").value = email;
      document.querySelector("#firstname").value = firstname;
      document.querySelector("#lastname").value = lastname;
      document.querySelector("#birthdate").value = birthdate;
    } else {
      alert(result.message);
    }
  })

  const changePasswordForm = document.querySelector("#changePasswordForm");
try {
  changePasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const password = document.querySelector("#password").value;
    const newPassword = document.querySelector("#newpassword").value;
    const confirmPassword = document.querySelector("#confirm_password").value;
  
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
  
    const data = {
      password: password,
      newPassword: newPassword
    };
  
    fetch(endpoint + "changepassword.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          alert("Change password successful. Logging out...");
          logoutUser();
        } else {
          alert(result.message);
        }
      })
  });
} catch (e) {}
  function logoutUser() {

    sessionStorage.clear();
    window.location.href = "login.html";
  }