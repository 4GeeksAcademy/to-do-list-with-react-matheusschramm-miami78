import React from "react";

const TodoBody = ({ todos, setTodos }) => {
    // A function to deleted a selected todo element

    // A function to render the todos array
    const renderTodos = todos.map(todoItem) => {
            <li className="todo-item" key={todoItem.id}>
                <h4></>{todoItem.todo}
                    <span>
                        <button className="delete-task" onClick={() => deleteTask(todoItem.id)}>
                            X
                        </button>
                    </span>
                </h4>
            </li>
        /* {todos.map((e,counter)=>(<li key={todo.id}>{e.todo}</li>))} */
    }

    // A function to delete a selected todo element
    const deleteTodo = (id) => {}
        // 1. Declare a variable called updatedTodos
        // 2. assign it the FILTERED todos array by removing the todo with the passed id argument todos.filter()
        // 3. SetTodos with the updatedTodos
        const updatedTodos = todos.filter((todoItem) => todoItem.id !=id)
        setTodos(updatedTodos);


    // the return statement we focus only on display the "No tasks, add a task" string

    return (
        <>
            <section className="main">
                <ul className="todo-list">
                    {todos.length !== 0 ? renderTodos : "No tasks. Add a task."}
                </ul>
            </section>
        </>
    )
}

export default TodoBody;
