import styles from "../scss/components/TodoList.module.scss";
import TodoItem from "../components/TodoItem/TodoItem";
import { ITodoItem } from "../interfaces/index";
import { TodoListProps } from "./All";

export default function Completed({ todos, setTodos }: TodoListProps) {
  const completedTodos = todos.filter((todo: ITodoItem) => todo.completed);
  return (
    <ul className={styles.container}>
      {completedTodos.map((todo: ITodoItem) => (
        <li key={todo.id}>
          <TodoItem todoItem={todo} todos={todos} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}
