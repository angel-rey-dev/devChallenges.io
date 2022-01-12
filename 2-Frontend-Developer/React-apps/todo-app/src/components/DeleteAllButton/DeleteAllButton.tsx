import { ITodoItem } from "../../interfaces";
import { TodoListProps } from "../../routes/All";
import styles from "./DeleteAllButton.module.scss";

export default function DeleteAllButton({ todos, setTodos }: TodoListProps) {
  
  const handleClick = () => {
    const newTodos: ITodoItem[] = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <span className="material-icons">delete</span>
      delete all
    </button>
  );
}
