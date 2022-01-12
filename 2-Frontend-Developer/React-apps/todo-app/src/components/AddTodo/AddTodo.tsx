import styles from "./AddTodo.module.scss";
import {  useState } from "react";
import { ITodoItem } from "../../interfaces/index";
import { TodoListProps } from "../../routes/All";


export default function AddTodo({ todos, setTodos }: TodoListProps): any {
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim()) {
      const newTodo: ITodoItem = {
        id: todos.length + 1,
        title: todo,
        completed: false,
      };
      setTodo("");
      setTodos([...todos, newTodo]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Add details"
        required
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}
