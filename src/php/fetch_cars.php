<?php

$servername = "localhost";
$username = "u320881325_dbuser";
$password = "Freedomcarz@123A";
$dbname = "u320881325_Freedomcarz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // Echo error message on the screen
    echo "Connection failed: " . $conn->connect_error;
} else {
    // Fetch cars data
    $sql = "SELECT * FROM cars";
    $result = $conn->query($sql);

    // Check if the query was successful
    if (!$result) {
        // Echo error message on the screen
        echo "Query failed: " . $conn->error;
    } else {
        // Convert result to JSON
        $cars = array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $cars[] = $row;
            }
        }

        // Set the content type to JSON
        header('Content-Type: application/json');

        // Output the JSON-encoded data
        echo json_encode($cars);
    }

    // Close the database connection
    $conn->close();
}
?>
