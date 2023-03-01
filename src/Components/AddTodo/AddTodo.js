import React, { useState } from 'react';
import './AddTodo.css'


const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState({ title: "" });

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = { id: Math.random(), title: title, done: false }
        // addTodo(newTodo);
        setTitle("");

        if ((isNaN(title))) {
            alert('It is not a Number,its string');
            addTodo(newTodo);
            setTitle('');
            // setTitle({ title: ""})
        }
        else {
            alert('It is a Number, please give a valid string');
            // setTitle({ title: ""})
            setTitle('');
        }
    }



    return (
        <form className='addtodo' onSubmit={handleSubmit}>
            <input type="text" id='title' name='title' value={title} onChange={(e) => { setTitle(e.target.value); console.log(isNaN(+e.target.value)) }} placeholder='Text here...' className='input-field' required />
            <button type='submit' className='submit-btn'>Add Todo</button>
        </form>
    );
};

export default AddTodo;