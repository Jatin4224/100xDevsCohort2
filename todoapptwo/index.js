const express = require("express");
const { dbConnect } = require("./config/db");
const { Todo } = require("./models/todo");
const app = express();
require("dotenv").config();
app.use(express.json());
dbConnect();
app.post("/check", async (req, res) => {
  const { title, description } = req.body;

  const user = await Todo.create({
    title,
    description,
  });
  res.json({
    message: "succes",
    user,
  });
});

app.listen(process.env.PORT, () => {
  console.log("server running fine");
});
