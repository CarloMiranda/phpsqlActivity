<?php

include "config.php";

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow specific HTTP methods
header("Access-Control-Allow-Methods: POST");
// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Profile updated successfully']);
    exit;
    // Check if the data array is not null
    if (!is_null($data)) {

        $email = isset($data['email']) ? $data['email'] : '';
        $firstname = isset($data['firstname']) ? $data['firstname'] : '';
        $lastname = isset($data['lastname']) ? $data['lastname'] : '';
        $birthdate = isset($data['birthdate']) ? $data['birthdate'] : '';


        //  Update the user profile in the database
         $userID = $_COOKIE['user_id'];
         $sql = "UPDATE users SET email = '$email', firstname = '$firstname', lastname = '$lastname', birthdate = '$birthdate' WHERE id = '$userID'";

        if ($conn->query($sql)) {
            $response = array(
                'success' => true,
                'message' => 'Profile updated successfully.'
        );
        echo json_encode($response);
    } else {
        $response = array(
            'success' => false,
            'message' => 'Invalid data. Please provide valid input.'
        );
        echo json_encode($response);
    }
    } 
}else {
    echo "Invalid request! Only POST requests are allowed.";
}
?>

