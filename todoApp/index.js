const express = require("express");
const { connectDb } = require("./config/db");
const app = express();

app.use("/", (req, res) => {
  res.send("Hello world jii");
});

app.listen(3000, () => {
  console.log("server running fine");
});
connectDb();
