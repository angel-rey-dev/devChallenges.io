import styles from "./TodoItem.module.scss";
import { ITodoItem } from "../../interfaces";
import deleteTodo from "../../helpers/deleteTodo";

export type TodoItemProps = {
  todos: ITodoItem[];
  setTodos: (todos: ITodoItem[]) => void;
  todoItem: ITodoItem;
};

export default function TodoItem({ todos, setTodos, todoItem }: TodoItemProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoItem.id) {
        return { ...todoItem, completed: e.target.checked };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="checkbox"
          title="Mark as completed"
          onChange={(e) => handleChange(e)}
          checked={todoItem.completed}
        />
        <strong className={todoItem.completed ? styles.completed : ""}>
          {todoItem.title}
        </strong>
      </div>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => deleteTodo({ setTodos, todos, todoItem })}
      >
        <span className="material-icons">delete</span>
      </button>
    </div>
  );
}
