import React from 'react';
import './Todolist.css'

const Todolist = ({ todo, removeTodo, handleChange }) => {
    console.log(todo);

    const handleCheckboxChange = () => {
        if (todo.done)
            return null;
        handleChange(todo.id)
    }

    return (
        <div>
            <input type="checkbox" className='check' checked={todo.done} onChange={() => { handleCheckboxChange() }} />
            <span style={todo.done ? {textDecoration:"line-through"} : null}>{todo.title}</span>
            <span className='delete' onClick={() => removeTodo(todo.id)}>X</span>
            <hr />
        </div>
    );
};

export default Todolist;