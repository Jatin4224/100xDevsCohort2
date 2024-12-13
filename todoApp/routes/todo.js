const express = require("express");
const todoRouter = express.Router();
const {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");
todoRouter.post("/createtodo", createTodo);
todoRouter.get("/alltodos", getTodo);
todoRouter.put("/updatetodo/:id", updateTodo);
todoRouter.delete("/deletetodo/:id", deleteTodo);
module.exports = todoRouter;
