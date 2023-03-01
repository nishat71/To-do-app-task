import React, { useState } from 'react';
import './AddTodo.css'


const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = { id: Math.random(), title: title, done: false }
        addTodo(newTodo);
        setTitle({});


        // if (! isNaN(AddTodo)) {
        //     // if (title.length < 2) {
        //     //     alert('PLease input a valid name')
        //     // }
        //     alert("please give a valid string")

        // }
        // else {
        //     addTodo(newTodo);
        //     setTitle(" ");
        // }
        // if (title.length < 1) {
        //     alert('PLease input a valid name')
        // }
    }
    return (
        <form className='addtodo' onSubmit={handleSubmit}>
            <input type="text" id='title' name='title' onChange={(e) => setTitle(e.target.value)} placeholder='Text here...' className='input-field' required />
            <button type='submit' className='submit-btn'>Add Todo</button>
        </form>
    );
};

export default AddTodo;