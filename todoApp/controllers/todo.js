const mongoose = require("mongoose"); // Correct module import
const { Todo } = require("../models/todo"); // Importing the Todo model

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validate input
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required." });
    }

    // Create a new todo item
    const userTodo = await Todo.create({
      title,
      description,
    });

    // Send the created todo as a response
    res.status(201).json({
      message: "Todo created successfully",
      todo: userTodo,
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      message: "Error creating todo",
      error: error.message,
    });
  }
};

module.exports = {
  createTodo,
};
