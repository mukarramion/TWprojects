<?php

$servername = "srv1274.hstgr.io";
$username = "u320881325_dbuser";
$password = "your_mysql_password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch cars data
$sql = "SELECT * FROM cars";
$result = $conn->query($sql);

// Convert result to JSON
$cars = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $cars[] = $row;
    }
}

echo json_encode($cars);

$conn->close();

?>
