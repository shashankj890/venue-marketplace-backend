const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("API running"));
app.listen(5000, () => console.log("Server running"));
