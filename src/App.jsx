import { useState } from 'react'
import './App.css'
import InputTask from './Component/InputTask';
import TodoList from './Component/TodoList';
import IntroCard from './Component/IntroCard';

function App() {

  let [todoList, setTodoList] = useState([]);
  
  let AddTask = (task,setTask) => {
    if(task!=""){
      setTodoList((pervTodoList)=>{
        return [...pervTodoList, {task: task, isDone: false}]
      });
    }
    setTask("");
  }

  let deleteTask = (id) => {
    setTodoList((pervTodoList) => 
      pervTodoList.filter((todo, todoIdx)=>{
        return todoIdx != id
      })
    )
  }

  let handleChecked = (id) => {
    setTodoList((pervTodoList)=>{
      return pervTodoList.map((todo, todoIdx)=>
        todoIdx === id ? { ...todo, isDone: !todo.isDone } : todo
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