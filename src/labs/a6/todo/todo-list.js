import React from "react";
import TodoItem from "./todo-item";
import todos from "./todos.json"

const TodoList = () => {
  return (
    <React.Fragment>
      <h3>Todo List</h3>
      <ul>
        {
          todos.map(todo => {
            return (<TodoItem todo={todo} />);
          })
        }
      </ul>
    </React.Fragment>
  );
}
export default TodoList;