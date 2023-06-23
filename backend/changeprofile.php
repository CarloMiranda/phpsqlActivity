<?php
include "config.php";

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'];
    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $birthdate = $data['birthdate'];

    // Check if the email exists
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows === 0) {
        // Update user information
        $sql = "UPDATE users SET firstname = '$firstname', lastname = '$lastname', birthdate = '$birthdate' WHERE email = '$email'";
        if ($conn->query($sql)) {
            $response = array(
                'success' => true,
                'message' => 'Profile updated successfully.'
            );
            echo json_encode($response);
        } else {
            $response = array(
                'success' => false,
                'message' => 'Error updating profile.'
            );
            echo json_encode($response);
        }
    } else {
        $response = array(
            'success' => false,
            'message' => 'User not found.'
        );
        echo json_encode($response);
    }
} else {
    echo "Invalid request! Only POST requests are allowed.";
}
?>
