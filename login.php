<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the entered username and password from the form
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // Replace this with your actual username and password validation logic
    if ($username === "adityavk96@gmail.com" && $password === "Neetuv@221594") {
        // Authentication successful
        // You can perform additional actions here if needed
        
        // Redirect to a success page
        header("Location: index.html");
        exit();
    } else {
        // Authentication failed
        // You can handle failed login attempts here
        
        // Redirect back to the login page with an error message
        header("Location: login.html?error=1");
        exit();
    }
}
?>
