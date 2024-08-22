import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);
  // State to hold the current input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue }]);
      setInputValue(''); // Clear input after adding
    }
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle removing a todo
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new to-do"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
