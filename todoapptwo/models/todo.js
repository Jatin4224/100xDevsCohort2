const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String, required: true, updatedAt: true },
  description: { type: String, required: true, updatedAt: true },
});

//model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo,
};
