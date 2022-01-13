<template>
  <div class="container">
    <div class="todo">
      <input
        class="todo__checkbox"
        type="checkbox"
        title="Mark as completed"
        @change="updateTodo"
        :checked="todo.completed"
      />

      <strong
        class="todo__title"
        :class="todo.completed ? 'todo__title--completed' : ''"
      >
        {{ todo.title }}
      </strong>
    </div>

    <button class="delete-btn" type="button" @click="deleteTodo"  >
      <span class="material-icons">delete</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    updateTodo() {
      const newTodo = {
        ...this.todo,
        completed: !this.todo.completed,
      };
      this.$emit("updateTodo", newTodo);
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.todo.id);
    },
  },
};
</script>

<style scoped>
.container {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
}

.todo {
  display: flex;
  align-items: center;
  width: 80%;
}
.todo__title {
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 0.5rem;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.todo__title--completed {
  color: #606060;
  text-decoration: line-through;
}

.todo__checkbox {
  width: 20px;
  height: 20px;
}
.delete-btn {
  background-color: transparent;
  color: #aaa;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.5rem;
  transition: all 0.5s;
}
.delete-btn:hover {
  color: #000;
}

.delete-btn:active {
  transform: scale(0.9);
}
</style>
