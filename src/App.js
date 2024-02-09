import React, { useState, useEffect } from 'react';
import './App.css'
import TodoContents from './Components/TodoContents';
import FormComponent from './Components/FormComponent';
import ButtonArea from './Components/ButtonArea';

function App() {
  const [isCompletedScreen, setIscompletedScreen] = useState(false);
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
    updatedTodoArr.unshift(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoArr));
  }
  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  }
  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
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
    updatedCompletedArr.unshift(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);//to delete the completed task
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  }
  return (
    <div className='App'>
      <h1>My ToDos</h1>
      <div className="todo-wrapper">
        <FormComponent
          setNewTitle={setNewTitle}
          setNewDescription={setNewDescription}
          newTitle={newTitle}
          newDescription={newDescription}
          handleAddTodo={handleAddTodo}
        />

        <ButtonArea isCompletedScreen={isCompletedScreen} setIscompletedScreen={setIscompletedScreen} />

        <TodoContents isCompletedScreen={isCompletedScreen}
          allTodos={allTodos}
          handleDeleteTodo={handleDeleteTodo}
          handleComplete={handleComplete}
          completedTodos={completedTodos}
          handleDeleteCompletedTodo={handleDeleteCompletedTodo}
        />

      </div>
    </div>
  )
}

export default App
