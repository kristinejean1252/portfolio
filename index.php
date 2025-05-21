<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['message']);

  $to = "your-email@example.com"; // Replace with your email address
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

  if (mail($to, $subject, $body)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message.";
  }
}
?>