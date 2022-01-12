import styles from "../scss/components/TodoList.module.scss";
import TodoItem from "../components/TodoItem/TodoItem";
import { ITodoItem } from "../interfaces/index";
import { TodoListProps } from './All';

export default function Active({ todos, setTodos }: TodoListProps) {
  const activeTodos = todos.filter((todo: ITodoItem) => !todo.completed);
  return (
      <ul className={styles.container}>
        {activeTodos.map((todo: ITodoItem) => (
          <li key={todo.id}>
            <TodoItem todoItem={todo} todos={todos} setTodos={setTodos} />
          </li>
        ))}
      </ul>
  );
}
