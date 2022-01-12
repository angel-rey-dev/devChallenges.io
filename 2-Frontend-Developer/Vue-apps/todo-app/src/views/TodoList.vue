<template>
  <div class="container">
    <h2>
      {{ type }}
    </h2>
    <ul>
      <li v-for="todo in filteredTodoItems" :key="todo.id">
        <span>
          {{ todo.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "TodoList",
  props: {
    type: {
      type: String,
      required: true,
    },
    todoItemsCopy: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredTodoItems() {
      if (this.type === "active") {
        return this.todoItems.filter((todo) => !todo.completed);
      } else if (this.type === "completed") {
        return this.todoItems.filter((todo) => todo.completed);
      } else return [...this.todoItems];
    },
  },
};
</script>
<style scoped></style>
