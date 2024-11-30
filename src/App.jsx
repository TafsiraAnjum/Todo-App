import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import InputTask from './components/InputTask';
import TodoList from './components/TodoList';
import IntroCard from './components/IntroCard';

function App() {

  let [todoList, setTodoList] = useState([]);
  
  let AddTask = (event, task, setTask) => {
    event.preventDefault();
    if(task!=""){
      setTodoList((pervTodoList)=>{
        return [...pervTodoList, {id: uuidv4(), task: task, isDone: false}]
      });
    }
    setTask("");
  }

  let deleteTask = (id) => {
    setTodoList((pervTodoList) => 
      pervTodoList.filter((todo)=>{
        return todo.id != id
      })
    )
  }

  let handleChecked = (id) => {
    setTodoList((pervTodoList)=>{
      return pervTodoList.map((todo)=>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
    });
  }

  return (
    <div className='App'>
    <h1>ToDo App</h1>
    <InputTask AddTask={AddTask}/>

    {todoList.length === 0 ? 
      <IntroCard/> :
      <TodoList todoList={todoList} deleteTask={deleteTask} handleChecked={handleChecked}/>
    }
    </div>
  )
}

export default App
