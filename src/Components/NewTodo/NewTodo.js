import React, { useState } from 'react'
import './NewTodo.css'

const Newtodo = (props) => {
    const [todo, setTodo] = useState({ title: "", desc: "" });
    const { title, desc } = todo;


    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({ title: "", desc: "" })
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-field'>
                <label htmlFor="title">title:</label>
                <input type="text" id='title' name='title' value={title} onChange={handleChange} />
            </div>
            <div className='form-field'>
                <label htmlFor="desc">Desc:</label>
                <textarea type="text" id='desc' name='desc' value={desc} onChange={handleChange} />
            </div>
            <button type='submit'>Add Todo</button>
        </form>

    );
};

export default Newtodo;


