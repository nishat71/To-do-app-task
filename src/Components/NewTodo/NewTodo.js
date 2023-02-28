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






// import React, { useState } from 'react'
// import Todos from '../Todos/Todos';
// import './NewTodo.css'
// import swal from "sweetalert"

// const Newtodo = (props) => {
//     const [todo, setTodo] = useState({ title: "", desc: "", done: false });
//     const { title, desc } = todo;
//     const [todoArrList, setTodoArrList] = useState([]);


//     let todoStore = localStorage.hasOwnProperty("todos") ? JSON.parse(localStorage.getItem("todos")) : []

//     const handleChange = (event) => {
//         const name = event.target.name;
//         setTodo((oldTodo) => {
//             return { ...oldTodo, [name]: event.target.value }
//         })

//         let { value } = event.target
//         let obj = {}
//         obj["title"] = value;
//         obj["done"] = false;
//         setTodo(obj)
//     }



//     const createTodo = (event) => {
//         const { name } = event.target
//         if (event.key === "Enter" || name === "addTodo") {
//             if (todo.title !== "") {
//                 todoStore.unshift(todo)
//                 localStorage.setItem('todos', JSON.stringify(todoStore))
//                 setTodo({ title: "", done: false })
//             }
//             else {
//                 swal("Please write todo first", "error")
//             }
//         }
//     }


//     const completeTodo = (i) => {
//         if (todoStore[i]["done"] !== true) {
//             todoStore[i]["done"] = true
//             localStorage.setItem("todos", JSON.stringify(todoStore))
//             setTodoArrList(todoStore)
//             swal("Good Job", "success");
//         }
//     }



//     const handleSubmit = (event) => {
//         event.preventDefault();
//         props.onAddTodo(todo);
//         setTodo({ title: "", desc: "" })
//     }

//     return (
//         <form className='form' onSubmit={handleSubmit}>
//             <div className='form-field'>
//                 <label htmlFor="title">title:</label>
//                 <input type="text" id='title' name='title' value={title} onChange={handleChange} onKeyPress={createTodo} />
//             </div>
//             <div className='form-field'>
//                 <label htmlFor="desc">Desc:</label>
//                 <textarea type="text" id='desc' name='desc' value={desc} onChange={handleChange} onKeyPress={createTodo} />
//             </div>
//             <button type='submit' name="addTodo" onClick={createTodo}>Add new Todo</button>
//         </form>

//     );
// };

// export default Newtodo;


