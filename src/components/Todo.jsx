import "./Todo.css";

const Todo = ({todo, deleteTask, handleChecked}) => {

  let styles = todo.isDone ? 
    {
      backgroundColor: "#515151",
      color: "#fff"
    } : {
      backgroundColor: "#fff",
      color: "#000"
    }

  return (
    <li className="Todo" style={styles}>
      <label htmlFor={todo.id} style={{textDecoration: todo.isDone ? "#f00 line-through" : "none"}}>
        <input id={todo.id} type="checkbox" checked={todo.isDone} onChange={()=>handleChecked(todo.id)} />
        <span className="checkbox"></span>
        {todo.task}
      </label>
      <button style={styles} className="dlt-btn" onClick={()=>deleteTask(todo.id)}><i className="fa-regular fa-trash-can"></i></button>
    </li>
  )
}

export default Todo