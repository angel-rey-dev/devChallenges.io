import styles from "../scss/components/TodoList.module.scss";
import { ITodoItem } from "../interfaces/index";
import TodoItem from "../components/TodoItem/TodoItem";

export type TodoListProps = {
  todos: ITodoItem[];
  setTodos: (todos: ITodoItem[]) => void;
};

export default function All({ todos, setTodos }: TodoListProps) {
  return (
    <ul className={styles.container}>
      {todos.map((todo: ITodoItem) => (
        <li key={todo.id}>
          <TodoItem todoItem={todo} todos={todos} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}
