import type { Todo } from "../types/todo";
import { formatTodoTime } from "../utils/formatTodoTime";
import "./TodoItem.css";
import Delete from '../assets/delete.svg'
import Checked from '../assets/checked.svg'
import Unchecked from '../assets/unchecked.svg'
// import { UnChecked } from "../assets/unchecked.svg";


interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}


export default function ToDoItem({ todo, onToggle, onDelete }: Props) {
return (
  <div className="todo-item">
    <div className="todo-left">
      <h3 className={todo.completed ? "completed" : ""}>
        {todo.title}
      </h3>
      <p>{formatTodoTime(todo.time)}</p>
    </div>

    <div className="todo-right">
      <button className="todo-btn" onClick={() => onToggle(todo.id)}>
        {todo.completed ? <img src={Checked} alt="checked" /> : <img src={Unchecked} alt="UnChecked" />}
      </button>

      <button className="todo-btn" onClick={() => onDelete(todo.id)}>
        <img src={Delete} alt="" />
      </button>
    </div>
  </div>
);

  // return (
  //   <div>
  //     <h3 style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
  //       {todo.title}
  //     </h3>

  //     <p>{todo.time}</p>

  //     <button onClick={() => onToggle(todo.id)}>
  //       {todo.completed ? "Done" : "Active"}
  //     </button>

  //     <button onClick={() => onDelete(todo.id)}>Delete</button>
  //   </div>
  // )
}
