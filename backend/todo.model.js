import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

let Todo = new Schema({
  todo_description: {
    type: String,
    required: true,
  },
  todo_responsible: {
    type: String,
    required: true,
  },
  todo_priority: {
    type: String,
    required: true,
  },
  todo_completed: {
    type: Boolean,
    required: true,
  },
});

export default model("Todos", Todo);
