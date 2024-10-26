import {useState} from 'react'
import './InputTask.css'

const InputTask = ({AddTask}) => {
    let [task, setTask] = useState("");

    let handleChange = (e) => {
        setTask(e.target.value);
    }    

  return (
    <div className='InputTask'>
      <input className='inp-todo' type="text" placeholder='Enter your task' value={task} onChange={handleChange}/>
      <button className='add-btn' onClick={()=>AddTask(task,setTask)} type='submit'>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}

export default InputTask
