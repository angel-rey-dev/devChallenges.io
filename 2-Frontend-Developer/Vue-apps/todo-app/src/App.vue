<template>
  <main class="todo">
    <h1>#todo</h1>
    <Nav :todoItems="todoItems" />
    <TodoList :type="type" :todoItemsCopy="todoItemsCopy" />
    <router-view />
  </main>
</template>

<script>
import Nav from "@/components/Nav.vue";
import TodoList from "@/views/TodoList.vue";
export default {
  name: "App",
  components: {
    Nav,
    TodoList,
  },
  data() {
    return {
      todoItems: [
        {
          id: 1,
          title: "Learn Vue",
          completed: false,
        },
        {
          id: 2,
          title: "Learn Vue Router",
          completed: true,
        },
        {
          id: 3,
          title: "Learn Vuex",
          completed: false,
        },
      ],
      todoItemsCopy: [...this.todoItems],
    };
  },
  methods: {
    addTodo(todo) {
      this.todoList.push(todo);
    },
    deleteTodo(todo) {
      this.todoList.splice(this.todoList.indexOf(todo), 1);
    },
    deleteAllTodos() {
      this.todoList = [];
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
  ---bg-color: #fff;
  ---blue: #2f80ed;
  ---gray: #bdbdbd;
  ---text-color: #000;
  border: 1px solid cyan;
  background-color: var(---bg-color);
  color: var(---text-color);
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
#app.darkmode {
  ---bg-color: #202020;
  ---text-color: #fff;
}
h1 {
  font-family: "Raleway", sans-serif;
  font-size: 2.5rem;
}
.todo {
  border: 1px solid cyan;
  max-width: 45rem;
  padding: 2rem 0 3rem;
  width: 90%;
}
</style>
