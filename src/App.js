import React, { useState } from 'react'
import './App.css'

function App() {
  const [isCompletedScreen, setIscompletedScreen] = useState(true);
  return (
    <div className='App'>
      <h1>ToDos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className='todo-input-item'>
            <label>Title</label>
            <input type="text" placeholder="What's the task title ?" />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" placeholder="What's the task description ?" />
          </div>
          <div className='todo-input-item'>
            <button type='button' className="primaryBtn">Add</button>
          </div>
        </div>
        <div className="btn-area">
          <button className={`secondaryBtn ${isCompletedScreen===false && 'active'}`} onClick={()=>setIscompletedScreen(false)} >Todo</button>
          <button className={`secondaryBtn ${isCompletedScreen===true && 'active'}`} onClick={()=>setIscompletedScreen(true)}>Completed</button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <h3>Task 1</h3>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
