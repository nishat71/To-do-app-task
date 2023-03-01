import './App.css';
import Home from './Components/Home/Home';
import TodoContainer from './Components/TodoContainer/TodoContainer';


function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <h1 align="center">Todo App</h1>
      <TodoContainer></TodoContainer>
    </div>
  );
}

export default App;
