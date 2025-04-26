import React, { useState } from "react";
import TodoHeader from "./TodoHeader"
import TodoBody from "./TodoBody"
import TodoFooter from "./TodoFooter"

const Todo = () => {

    // The todos array state will be housed here for the children components
    // We can pass it as props to them
    const [todos, setTodos] = useState([]);

    return (
        <>
            <h1>Todos</h1>
            <div>
                <TodoHeader
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
            <div>
                <TodoBody
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
            {/* <TodoFooter /> */}
        </>
    )
}

export default Todo;