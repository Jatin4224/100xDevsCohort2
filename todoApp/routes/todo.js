const express = require("express");
const todoRouter = express.Router();
const { createTodo } = require("../controllers/todo");
todoRouter.post("/createtodo", createTodo);

module.exports = todoRouter;
