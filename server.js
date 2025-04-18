const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Redirects to GitHub repos
app.get("/climate-crisis", (req, res) => {
  res.redirect("https://github.com/jdelacruz23/group-project-1-g10");
});

app.get("/typesetting", (req, res) => {
  res.redirect("https://github.com/GalvinHa/typesettingHW");
});

app.get("/four-algorithms", (req, res) => {
  res.redirect("https://github.com/GalvinHa/four-sorting-algo-phase-1");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
