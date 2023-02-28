import React from 'react';
import './SingleTodo.css'

const SingleTodo = (props) => {
    const { title, desc} = props.todo;
    const { id} = props;

    const handleClick = (id) => {
        props.onRemoveTodo(id);
    }

    return (
        <div className='todo'>
            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className='btn-grp'>
                <button className='checkbox' onClick={() => {handleClick(id)}}>
                    <i className='fa fa-check circle fa-2x'></i>
                </button>
                <button className='btn' onClick={() => {handleClick(id)}}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
        </div>
    );
};

export default SingleTodo;