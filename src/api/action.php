<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Content-Type: application/json");

$host = "localhost";
$user = "root";
$pass = "";
$db = "watchlist";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["error" => $conn->connect_error]));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === "GET") {
    $result = $conn->query("SELECT * FROM movies ORDER BY id DESC");
    $rows = [];
    while ($row = $result->fetch_assoc()) $rows[] = $row;

    echo json_encode($rows);
    exit;
}

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $title = $data["title"];
    $year = $data["year"];
    $genre = $data["genre"];
    $poster = $data["poster"];

    $stmt = $conn->prepare("INSERT INTO movies (title, year, genre, poster) VALUES (?,?,?,?)");
    $stmt->bind_param("siss", $title, $year, $genre, $poster);
    $stmt->execute();

    echo json_encode(["success" => true]);
    exit;
}

if ($method === "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);

    $id = $data["id"];
    $title = $data["title"];
    $year = $data["year"];
    $genre = $data["genre"];
    $poster = $data["poster"];

    $stmt = $conn->prepare("UPDATE movies SET title=?, year=?, genre=?, poster=? WHERE id=?");
    $stmt->bind_param("sissi", $title, $year, $genre, $poster, $id);
    $stmt->execute();

    echo json_encode(["success" => true]);
    exit;
}

if ($method === "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data["id"];

    $conn->query("DELETE FROM movies WHERE id=$id");

    echo json_encode(["success" => true]);
    exit;
}

?>