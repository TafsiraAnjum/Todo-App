import Todo from './Todo';
import "./TodoList.css";

const TodoList = ({todoList, deleteTask, handleChecked}) => {
  return (
      <ul className='TodoList'>
        {
          todoList.map((todo)=>
            <Todo todo={todo} key={todo.id} deleteTask={deleteTask} handleChecked={handleChecked}/>
          )
        }
    </ul>
  )
}

export default TodoList
