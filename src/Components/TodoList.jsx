import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
function Todo(props) {
  const {
    allTodos,
    handleDeleteTodo,
    handleComplete,
    isCompletedScreen
  } = props;
  return (
    <div>
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
    </div>
  )
}

export default Todo
