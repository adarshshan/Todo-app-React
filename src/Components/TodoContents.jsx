import React from 'react'
import TodoList from './TodoList';
import CompletedList from './CompletedList';
function Contents(props) {
    const {
        isCompletedScreen,
        allTodos,
        handleDeleteTodo,
        handleComplete
    } = props;
    return (
        <div>
            <div className="todo-list">
                <TodoList
                    allTodos={allTodos}
                    handleDeleteTodo={handleDeleteTodo}
                    handleComplete={handleComplete}
                    isCompletedScreen={isCompletedScreen}
                />

                <CompletedList />
                
            </div>
        </div>
    )
}

export default Contents;
