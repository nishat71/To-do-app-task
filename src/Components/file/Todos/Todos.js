import React from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';
import './Todos.css'

const Todos = (props) => {
    // console.log(props.todos);

    return (
        <div className='todos'>  
            {
                props.todos.map(todo=><SingleTodo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo} handleCheckbox={props.handleCheckbox}></SingleTodo>)
            }
        </div>
    );
};

export default Todos;







