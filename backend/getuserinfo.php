<?php
include "config.php";

$id = $_GET['id'];
// Retrieve user information from the database
$sql = "SELECT email, firstname, lastname, birthdate FROM users WHERE id = '$id'"; // Replace <condition> with appropriate condition for the user
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $response = array(
        'success' => true,
        'data' => $row
    );
    echo json_encode($response);
} else {
    $response = array(
        'success' => false,
        'message' => 'User not found.'
    );
    echo json_encode($response);
}
?>
