
import React from "react";
import "./Todo.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const Todo = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleTodo = (task: string) => {
    if (!task.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h1>Todo List</h1>

        <div className="todo-input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter a todo..."
          />

          <button onClick={() => handleTodo(inputValue)}>
            Add Todo
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => {
            return (
              <li className="todo-item" key={todo.id}>
                <span>{todo.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

