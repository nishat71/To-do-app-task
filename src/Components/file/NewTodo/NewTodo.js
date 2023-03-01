import React, { useState } from 'react'
import './NewTodo.css'

const NewTodo = (props) => {
    const [todo, setTodo] = useState({ title: "", desc: "" });
    const { title, desc } = todo;


    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value }
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if(isNaN(handleChange)){
            if (title.length < 1) {
                alert('PLease input a valid name')
            }
            if (desc.length <= 20) {
                alert('please enter up to 20 digit')
            }
        }
        else{
            alert("please give a valid string")
        }
        props.onAddTodo(todo);
        setTodo({ title: "", desc: "" })

    }



    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-field'>
                <label htmlFor="title">Title:</label>
                <input type="text" className='input-field' id='title' name='title' value={title} onChange={handleChange} required />
            </div>
            <div className='form-field'>
                <label htmlFor="desc">Desc:</label>
                <textarea type="text" className='input-field' id='desc' name='desc' value={desc} onChange={handleChange} required />
                {/* <span>{desc.length}/20</span> */}
            </div>
            <button type='submit'>Add Todo</button>
        </form>

    );
};

export default NewTodo;




