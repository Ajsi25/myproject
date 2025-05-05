<?php
$data = json_decode(file_get_contents("php://input"), true);
$city = $data['qyteti'];
$temp = $data['temperatura'];

$conn = new mysqli("localhost", "root", "", "moti_db");

if ($conn->connect_error) {
    die("Lidhja dështoi: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO kerkesa (qyteti, temperatura) VALUES (?, ?)");
$stmt->bind_param("sd", $city, $temp);
$stmt->execute();
$stmt->close();
$conn->close();
?>
