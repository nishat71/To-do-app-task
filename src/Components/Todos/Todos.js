import React from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';
import './Todos.css'

const Todos = (props) => {
    console.log(props.todos);

    return (
        <div className='todos'>  
            {
                props.todos.map(todo=><SingleTodo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}></SingleTodo>)
            }
            {/* {
                props.todos.map((todo, index) => {
                    return <SingleTodo key={index} todo={todo}></SingleTodo>
                })
            } */}
        </div>
    );
};

export default Todos;









// import React from 'react';
// import SingleTodo from '../SingleTodo/SingleTodo';
// import './Todos.css'

// const Todos = (props) => {
//     console.log(props.todos);

//     return (
//         <div className='todos'>
//             {
//                 props.todos.map(todo => <SingleTodo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}></SingleTodo>)
//             }
//         </div>
//     );
// };

// export default Todos;