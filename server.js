// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));


//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  //TODO add code!
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  //TODO add code
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  //TODO add code
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});