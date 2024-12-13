const express = require("express");
const { connectDb } = require("./config/db");
const todoRouter = require("./routes/todo");
const app = express();
app.use(express.json());

app.use("/api/v1", todoRouter);

app.listen(3000, () => {
  console.log("server running fine");
});
connectDb();
