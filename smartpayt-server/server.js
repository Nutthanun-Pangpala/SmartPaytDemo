const express = require("express");
const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  res.send("SmartPayt server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

