<?php

include "config.php";

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $tweet_id = $data['tweet_id'];

    $sql = "DELETE FROM posts WHERE tweet_id = '$tweet_id'";

    if ($conn->query($sql)) {
        $response = array(
            'success' => true,
            'message' => 'Tweet deleted successfully.'
        );
        echo json_encode($response);
    } else {
        $response = array(
            'success' => false,
            'message' => 'Failed to delete tweet.'
        );
        echo json_encode($response);
    }
} else {
    echo "Invalid request! Only POST requests are allowed.";
}
?>
