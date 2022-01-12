import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ITodoItem } from "./interfaces";

// Routes
import All from "./routes/All";
import Active from "./routes/Active";
import Completed from "./routes/Completed";

// Components
import Navbar from "./components/Navbar/Navbar";
import AddTodo from "./components/AddTodo/AddTodo";
import DeleteAllButton from "./components/DeleteAllButton/DeleteAllButton";

function App() {
  const { pathname } = useLocation();

  const [todos, setTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>#todo</h1>
          <Navbar />
        </header>

        {pathname !== "/completed" && (
          <AddTodo todos={todos} setTodos={setTodos} />
        )}

        <main className={styles.content}>
          <Routes>
            <Route
              path="/"
              element={<All todos={todos} setTodos={setTodos} />}
            />
            <Route
              path="/active"
              element={<Active todos={todos} setTodos={setTodos} />}
            />
            <Route
              path="/completed"
              element={<Completed todos={todos} setTodos={setTodos} />}
            />
          </Routes>

          {pathname === "/completed" &&
            todos.some((todo) => todo.completed) && (
              <DeleteAllButton setTodos={setTodos} todos={todos} />
            )}
        </main>
      </div>
      <footer className={styles.footer}>
        <p>
          Developed by
          <a
            href="https://github.com/Jose-Angel-Rey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jose-Angel-Rey
          </a>
        </p>
        <span>devChallenges.io</span>
      </footer>
    </>
  );
}

export default App;
