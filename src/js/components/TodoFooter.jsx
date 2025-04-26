import React from "react";

const TodoFooter = ({ todos }) => {


    return (
    <>
        <footer className="footer">
            {
                // Create a ternary that will display the grammatically correct
                // Number of items left
                todos.length !== 1 ? `${todos.length} item left` : `${todos.length} item left`
            }
        </footer>
    </>
    )
}

export default TodoFooter;
