import { TodoItemProps } from "../components/TodoItem/TodoItem";

const deleteTodo = ({ setTodos, todos, todoItem }: TodoItemProps) => {
  const newTodos = todos.filter((todo) => todo.id !== todoItem.id);
  setTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
};

export default deleteTodo;
