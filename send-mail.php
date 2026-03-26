<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

$name = htmlspecialchars(trim($_POST["name"] ?? ""));
$email = filter_var(trim($_POST["email"] ?? ""), FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars(trim($_POST["message"] ?? ""));

if ($name === "" || !$email || $message === "") {
    http_response_code(422);
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
    exit;
}

$to = "rohithreddy3103@gmail.com";
$subject = "New Contact Form Submission";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = [
    "From: $email",
    "Reply-To: $email",
    "Content-Type: text/plain; charset=UTF-8"
];

if (mail($to, $subject, $body, implode("\r\n", $headers))) {
    echo json_encode(["status" => "success"]);
    exit;
}

http_response_code(500);
echo json_encode(["status" => "error", "message" => "Mail delivery failed"]);
?>
