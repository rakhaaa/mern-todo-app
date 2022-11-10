import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ToDosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({
          todos: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((currentTodo, index) => {
              return (
                <tr key={currentTodo._id}>
                  <td>{index + 1}</td>
                  <td className={currentTodo.todo_completed ? "completed" : ""}>{currentTodo.todo_description}</td>
                  <td className={currentTodo.todo_completed ? "completed" : ""}>{currentTodo.todo_responsible}</td>
                  <td className={currentTodo.todo_completed ? "completed" : ""}>{currentTodo.todo_priority}</td>
                  <td>{<Link to={`edit/${currentTodo._id}`}>Edit</Link>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
