import React from 'react'
import Todo from './TodoList';
import CompletedList from './CompletedList';
function Contents(props) {
    const {
        isCompletedScreen,
        allTodos,
        handleDeleteTodo,
        handleComplete,
        completedTodos,
        handleDeleteCompletedTodo
    } = props;
    return (
        <div>
            <div className="todo-list">
                <Todo
                    allTodos={allTodos}
                    handleDeleteTodo={handleDeleteTodo}
                    handleComplete={handleComplete}
                    isCompletedScreen={isCompletedScreen}
                />
                <CompletedList
                    isCompletedScreen={isCompletedScreen}
                    completedTodos={completedTodos}
                    handleDeleteCompletedTodo={handleDeleteCompletedTodo} />
            </div>
        </div>
    )
}

export default Contents;
