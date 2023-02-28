const express = require("express");

const app = express();

app.get("/*", (req, res) => {
  console.log(req.originalUrl);
  res.send({ msg: "success" });
});

app.listen(80, () => console.log("App started on 80"));
