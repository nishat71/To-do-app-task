import React, { useState } from 'react'
import NewTodo from '../NewTodo/NewTodo';
import Todos from '../Todos/Todos';
import './Home.css'
import { v4 as uuidv4 } from "uuid";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo }]
        })
    };

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filterTodos = prevTodos.filter(todo => todo.id !== id);
            return filterTodos;
        });
    }


    return (
        <div className="container">
            <h1 className="heading">Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo}></NewTodo>
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo}></Todos>

        </div>
    );
};

export default Home;






// import React, { useState } from 'react'
// import NewTodo from '../NewTodo/NewTodo';
// import Todos from '../Todos/Todos';
// import './Home.css'
// import { v4 as uuidv4 } from "uuid";

// const Home = () => {
//     const [todos, setTodos] = useState([]);


//     const handleAddTodo = (todo) => {
//         setTodos((prevTodos) => {
//             return [...prevTodos, { id: uuidv4(), todo }]
//         })
//     };

//     const handleRemoveTodo = (id) => {
//         setTodos((prevTodos) => {
//             const filterTodos = prevTodos.filter(todo => todo.id !== id);
//             return filterTodos;
//         });
//     }


//     return (
//         <div className="container">
//             <h1 className="heading">Todo App</h1>
//             <NewTodo onAddTodo={handleAddTodo}></NewTodo>
//             <Todos todos={todos} onRemoveTodo={handleRemoveTodo}></Todos>

//         </div>
//     );
// };

// export default Home;








