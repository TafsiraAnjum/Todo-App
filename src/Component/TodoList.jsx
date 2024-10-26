import Todo from './Todo';
import "./TodoList.css";

const TodoList = ({todoList, deleteTask, handleChecked}) => {
  return (
      <div className='TodoList'>
        {
          todoList.map((todo,todoIdx)=>
            <Todo todo={todo} id={todoIdx} deleteTask={deleteTask} handleChecked={handleChecked}/>
          )
        }
    </div>
  )
}

export default TodoList