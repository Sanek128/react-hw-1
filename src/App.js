// import logo from './logo.svg';
import './App.css';
import { todoList } from './data/data';
import Todo from './components/todo-item/todo';
import TodoList from './components/todo-list/TodoList';
import UsersList from './users-list/UsersList';

function App() {
  
  return (
    // <div>
    //   <TodoList/>
    // </div>
    <div>
      <TodoList/>
      -----------------------------
      <UsersList/>
    </div>
    
  );
}

export default App;
