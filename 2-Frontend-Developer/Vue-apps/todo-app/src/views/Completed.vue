<template>
  <div class="container">
    <ul class="todo-list">
      <li v-for="todo in todoCompleted" :key="todo.id">
        <todo-item
          :todo="todo"
          @update-todo="updateTodo"
          @delete-todo="deleteTodo"
        />
      </li>
    </ul>
    <delete-all-button
      v-if="todoCompleted.length > 0"
      @delete-completed-todos="deleteCompletedTodos"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import DeleteAllButton from "@/components/DeleteAllButton.vue";

export default {
  name: "Completed",
  components: {
    DeleteAllButton,
    TodoItem,
  },
  props: ["todoList"],
  computed: {
    todoCompleted() {
      return this.todoList?.filter((todo) => todo.completed);
    },
  },
  methods: {
    deleteTodo(todoId) {
      this.$emit("deleteTodo", todoId);
    },
    updateTodo(newTodo) {
      this.$emit("updateTodo", newTodo);
    },
    deleteCompletedTodos() {
      this.$emit("deleteCompletedTodos");
    },
  },
};
</script>
