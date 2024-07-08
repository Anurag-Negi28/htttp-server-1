const express = require("express");
const port = 3000;

const app = express();

app.post("/conversations", (req, res) => {
  console.log(req.headers["authorization"]);
  res.send("<b>2+2=4<b>");
});

app.get("/", (req, res) => {
  console.log(req.headers["authorization"]);
  res.send("<b>Hello World!<b>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
