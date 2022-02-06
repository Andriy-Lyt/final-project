const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Server is up on port 3001");
})

app.listen(3001, () => console.log("Server is up on port 3001"));