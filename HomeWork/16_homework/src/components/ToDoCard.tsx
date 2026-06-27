import { useEffect, useState } from "react";
import type { Todo } from "../types/todo";
import ToDoItem from "./ToDoItem";
import "./TodoCard.css";
import Wallpaper from "../assets/wallpaper.svg";
import Checked from '../assets/checked.svg'
import Unchecked from '../assets/unchecked.svg'

const STORAGE_KEY = "todos";

function createTodo(title: string, completed: boolean): Todo {
  return {
    id: Date.now(),
    title,
    time: new Date().toISOString(),
    completed,
  };
}

export default function ToDoCard() {

    const [input, setInput] = useState("");
    

    const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Todo[]) : [];
    });

    useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
    if (!input.trim()) return;

    const newTodo = createTodo(input.trim(), completed);

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
    setCompleted(false);
    };

    const toggleTodo = (id: number) => {
    setTodos((prev) =>
        prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
        )
    );
    };

    const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
    const update = () => {
        const now = new Date();

        setTime(
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })
        );

        setDate(
        now.toLocaleDateString([], {
            weekday: "short",
            day: "numeric",
            month: "short",
        })
        );
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
    }, []);
    const [completed, setCompleted] = useState(false);

return (
    <div className="todo-card">
      <header className="header">
        <img className="wallpaper" src={Wallpaper} alt="wallpaper" />
        <div className="title">
            <p>{date}</p>
            <h1>{time}</h1>
        </div>
      </header>

        <div className="todo-input">
            <div className="input-section">
                <div className="input-icon" onClick={() => setCompleted((prev) => !prev)}>
                    {
                        completed ? (
                        <img src={Checked} alt="checked" />
                        ) : (
                        <img src={Unchecked} alt="unchecked" />
                        )
                    }
                </div>

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Note"
                />
            </div>

            <button onClick={addTodo}>+</button>
        </div>

      <div className="list">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
