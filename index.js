const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<b>Hello World!<b>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
