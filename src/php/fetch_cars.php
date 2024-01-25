<?php
$servername = "193.203.184.45";
$username = "u320881325_dbuser";
$password = "Freedomcarz@123A";
$dbname = "u320881325_Freedomcarz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['error' => 'Connection failed']);
    exit();
}

// Fetch cars data using prepared statement
$sql = "SELECT * FROM cars";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['error' => 'Prepared statement creation failed']);
    exit();
}

$result = $stmt->execute();

if (!$result) {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['error' => 'Query execution failed']);
    exit();
}

$cars = array();
$res = $stmt->get_result();

while ($row = $res->fetch_assoc()) {
    // Convert the blob data to base64
    $row['picture'] = base64_encode($row['picture']);
    $cars[] = $row;
}

// Check if $cars is an array before encoding to JSON
if (is_array($cars)) {
    echo json_encode($cars);
} else {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['error' => 'Error encoding data to JSON']);
}

$stmt->close();
$conn->close();
?>
