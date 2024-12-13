// const mongoose = require("mongoose"); // Correct module import
// const { Todo } = require("../models/todo"); // Importing the Todo model

// const createTodo = async (req, res) => {
//   const { title, description } = req.body;

//   const user = await Todo.create({
//     title,
//     description,
//   });
//   res.json({
//     message: "succes",
//     user,
//   });
// };

// module.exports = {
//   createTodo,
// };
const { Todo } = require("../models/todo"); // Importing the Todo model

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Input validation
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required." });
    }

    // Create a new Todo in the database
    const todo = await Todo.create({
      title,
      description,
    });

    // Respond with the created Todo
    res.status(201).json({
      message: "Todo created successfully",
      todo,
    });
  } catch (error) {
    console.error("Error creating todo:", error.message);

    // Send a generic error response
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  createTodo,
};
