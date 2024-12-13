const express = require("express");
const todoRouter = express.Router();
const { createTodo, getTodo } = require("../controllers/todo");
todoRouter.post("/createtodo", createTodo);
todoRouter.get("/alltodos", getTodo);
module.exports = todoRouter;
