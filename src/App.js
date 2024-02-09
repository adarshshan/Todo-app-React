import React, { useState, useEffect } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

import './App.css'

function App() {
  const [isCompletedScreen, setIscompletedScreen] = useState(true);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completedTodos, setCompletedTodos] = useState([])

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todoList'));
    const savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) {
      setTodos(savedTodo);
    }
    if (savedCompletedTodo) setCompletedTodos(savedCompletedTodo);
  }, [])

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription
    }
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoArr));
  }
  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  }
  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth();
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '-' + m + '-' + mm + '-' + yyyy + ' -at- ' + h + ':' + m + ':' + s;
    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn
    }
    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);//to delete the completed task
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  }
  return (
    <div className='App'>
      <h1>My ToDos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className='todo-input-item'>
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="What's the task title ?" />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="What's the task description ?" />
          </div>
          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className="primaryBtn">Add</button>
          </div>
        </div>
        <div className="btn-area">
          <button className={`secondaryBtn ${isCompletedScreen === false && 'active'}`} onClick={() => setIscompletedScreen(false)} >Todo</button>
          <button className={`secondaryBtn ${isCompletedScreen === true && 'active'}`} onClick={() => setIscompletedScreen(true)}>Completed</button>
        </div>
        <div className="todo-list">
          {isCompletedScreen === false && allTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <MdOutlineDelete className='icon' onClick={() => handleDeleteTodo(index)} title='Delete?' />
                  <BsCheckCircle className='check-icon' onClick={() => handleComplete(index)} title='Complete?' />

                </div>
              </div>
            )
          })}

          {isCompletedScreen === true && completedTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><small>Completed on: {item.completedOn}</small></p>
                </div>
                <div>
                  <MdOutlineDelete className='icon' onClick={() => handleDeleteTodo(index)} title='Delete?' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
