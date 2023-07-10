import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setToDos] = useState([
    {name: "Buy groceries", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"}

  ]);
  const [newToDO, setNewToDo] = useState("");
  // todos.onValueChange = todos.onValueChange.bind(todos);
  const todoNodes = todos.map(function (todo, index) {
    return (
    <li key={index} className={todo.priority}>
      <span>{todo.name}</span>
      {todo.priority === "low" ? <span className="low"></span> : 
      <span className="high"></span>}
    </li>
      )
  })
  
  const handleToDoInput = function (event) {
    const value = event.target.value;
    setNewToDo(value);
  }
  const handleFormSubmit = function (event) {
    event.preventDefault();
    const todo = {
      name: newToDO,
      priority: "low"
    };
    const copyToDo = [...todos];
    copyToDo.push(todo);
    setToDos(copyToDo);
    setNewToDo("");
  }

  return (
    <div className="App">

      <h1>ToDo's</h1>
      

      <form onSubmit={handleFormSubmit}>
      
        <label htmlFor="new-todo"></label>
        <input id="new-todo" type="text" value={newToDO} onChange={handleToDoInput}/>
          <div className='priorityradio'>
          <label>
            <input
              type="radio"
              value="High"
              name="priorityradio"
              // onChange={todos.onValueChange}
            />
            High
          </label>
          <label>
            <input
              type="radio"
              value="Low"
              name="priorityradio"
              // onChange={todos.onValueChange}
            />
            Low
          </label>
          </div>
        <input type="submit" value="Save new todo"/>
      </form>

      <ul>
        {todoNodes}
      </ul>

    
    </div>
  );
}

export default App;