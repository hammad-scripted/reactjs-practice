import React from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    } else {
      alert('Please enter a todo');
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input 
          className="todo-input"
          type="text" 
          placeholder="Enter a todo" 
          onChange={handleChange} 
          value={inputValue} 
        />
        <button className="todo-button" type="submit">Add Todo</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;