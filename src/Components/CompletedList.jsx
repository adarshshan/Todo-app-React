import React, { useContext } from 'react'
import { MdOutlineDelete } from "react-icons/md";

import { Mycontext } from '../App';

function CompletedList() {
    const {
        isCompletedScreen,
        completedTodos,
        handleDeleteCompletedTodo } = useContext(Mycontext);

    return (
        <div>
            {isCompletedScreen === true && completedTodos.map((item, index) => {
                return (
                    <div className="todo-list-item" key={index}>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p><small>Completed on: {item.completedOn}</small></p>
                        </div>
                        <div>
                            <MdOutlineDelete className='icon' onClick={() => handleDeleteCompletedTodo(index)} title='Delete?' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CompletedList
