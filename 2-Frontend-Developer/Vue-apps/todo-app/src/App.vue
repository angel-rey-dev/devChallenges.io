<template>
  <main class="todo-container">
    <h1>#todo</h1>
    <Nav />
    <router-view
      :todoList="todoList"
      @add-todo="addTodo"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo"
      @delete-completed-todos="deleteCompletedTodos"
    ></router-view>
  </main>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      todoList: [],
    };
  },
  methods: {
    addTodo(todo) {
      const newTodo = {
        id: uuidv4(),
        ...todo,
      };
      this.todoList.push(newTodo);
    },
    updateTodo(updatedTodo) {
      const index = this.todoList.findIndex(
        (todo) => todo.id === updatedTodo.id
      );
      this.todoList[index] = updatedTodo;
    },
    deleteTodo(todoId) {
      this.todoList = this.todoList.filter((todo) => todo.id !== todoId);
    },
    deleteCompletedTodos() {
      this.todoList = this.todoList.filter((todo) => !todo.completed);
    },
  },
  created() {
    const todoLocal = JSON.parse(localStorage.getItem("todoLocal"));
    if (todoLocal) {
      this.todoList = todoLocal;
    } else localStorage.setItem("todoLocal", JSON.stringify(this.todoList));
  },
  watch: {
    todoList: {
      handler() {
        localStorage.setItem("todoLocal", JSON.stringify(this.todoList));
      },
      deep: true,
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Raleway:wght@700&display=swap");
body {
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  text-align: center;
  width: 100%;
}
h1 {
  font-family: "Raleway", sans-serif;
  font-size: 2.5rem;
}
.todo-container {
  max-width: 45rem;
  min-height: 85vh;
  padding: 2rem 0 3rem;
  width: 90%;
}
</style>
