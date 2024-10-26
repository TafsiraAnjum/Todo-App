import "./Todo.css";

const Todo = ({todo, id, deleteTask, handleChecked}) => {

  let styles = todo.isDone ? 
    {
      backgroundColor: "#515151",
      color: "#fff"
    } : {
      backgroundColor: "#fff",
      color: "#000"
    }

  return (
    <div className="Todo" key={id} style={styles}>
      <label htmlFor={id} style={{textDecoration: todo.isDone ? "#f00 line-through" : "none"}}>
        <input id={id} type="checkbox" checked={todo.isDone} onChange={()=>handleChecked(id)} />
        <span className="checkbox"></span>
        {todo.task}
      </label>
      <button style={styles} className="dlt-btn" onClick={()=>deleteTask(id)}><i className="fa-regular fa-trash-can"></i></button>
    </div>
  )
}

export default Todo
