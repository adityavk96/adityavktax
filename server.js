const express = require("express");
const app = express();
const port = 3000; // You can change this port as needed

app.use(express.urlencoded({ extended: true }));

// Serve your HTML and CSS files statically
app.use(express.static(__dirname));

// POST endpoint to handle login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if the entered username and password are correct
  if (username === "Akv2296@gmail.com" && password === "Akv@2215") {
    // Redirect to the specified page after successful login
    res.redirect("/index.html");
  } else {
    res.send("Incorrect username or password. Please try again.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
