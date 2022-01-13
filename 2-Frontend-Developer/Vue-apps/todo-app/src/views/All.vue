<template>
  <div class="container">
    <add-todo @add-todo="addTodo" />
    <ul class="todo-list">
      <li v-for="todo in todoList" :key="todo.id">
        <todo-item
          :todo="todo"
          @update-todo="updateTodo"
          @delete-todo="deleteTodo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "All",
  components: {
    AddTodo,
    TodoItem,
  },
  props: ["todoList"],
  methods: {
    addTodo(todo) {
      this.$emit("addTodo", todo);
    },
    deleteTodo(todoId) {
      this.$emit("deleteTodo", todoId);
    },
    updateTodo(newTodo) {
      this.$emit("updateTodo", newTodo);
    },
  },
};
</script>
<style>
.todo-list {
  list-style-type: none;
  padding: 0;
}
</style>
