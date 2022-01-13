<template>
  <div class="container">
    <add-todo @add-todo="addTodo" />
    <ul class="todo-list">
      <li v-for="todo in todoActive" :key="todo.id">
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
  name: "Active",
  props: ["todoList"],
  components: {
    AddTodo,
    TodoItem,
  },
  computed: {
    todoActive() {
      return this.todoList?.filter((todo) => !todo.completed);
    },
  },
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
