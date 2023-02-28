import React, { useState } from 'react'
import NewTodo from '../NewTodo/NewTodo';
import Todos from '../Todos/Todos';
import './Home.css'
import { v4 as uuidv4 } from "uuid";



const Home = () => {
    const [todos, setTodos] = useState([]);


    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo, done: false }]
        })
    };

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filterTodos = prevTodos.filter(todo => todo.id !== id);
            return filterTodos;
        });
    }


    const handleCheckbox = (id) => {
        const newTodoList = todos.map((todo) => {
            if (todo.id === id)
                return { ...todo, done: !todo.done }
            return todo;
        });
        setTodos(newTodoList);
    }
    console.log(todos);




    return (
        <div className="container">
            <h1 className="heading">Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo}></NewTodo>
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} handleCheckbox={handleCheckbox}></Todos>

        </div>
    );
};

export default Home;




