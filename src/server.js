const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))

let activeUsers = [];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"public", "index.html"))
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


