import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todolist from '../Todolist/Todolist';
import './TodoContainer.css'


const TodoContainer = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (newTodo) => {
        const newTodoList = [...todos, newTodo]
        setTodos(newTodoList);
    }


    const handleRemoveTodo = (id) => {
        const newTodoList = todos.filter(todo => todo.id !== id)
        setTodos(newTodoList);
    }

    const handleCheckboxChange = (id) => {
        const newTodoList = todos.map((todo) => {
            if (todo.id === id)
                return { ...todo, done: !todo.done }
            return todo;
        });
        setTodos(newTodoList);
    }

    return (
        <div className='Todo-Container'>
            {/* <h1 className="heading">Todo App</h1> */}
            {
                todos.length > 0 ? todos.map(todo => <Todolist todo={todo} removeTodo={handleRemoveTodo} handleChange={handleCheckboxChange}></Todolist>) : <p align="center">No todo left here</p>
            }
            <AddTodo addTodo={handleAddTodo}></AddTodo>
        </div>
    );
};

export default TodoContainer;