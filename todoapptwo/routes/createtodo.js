const express = require("express");
const { createTodo } = require("../controllers/createtodo");

const createRouter = express.Router();

createRouter.post("/", createTodo);

module.exports = createRouter;
