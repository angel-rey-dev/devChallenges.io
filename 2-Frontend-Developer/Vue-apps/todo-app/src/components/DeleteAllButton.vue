<template>
  <button @click="deleteCompletedTodos">
    <span class="material-icons">delete</span>
    delete all
  </button>
</template>

<script>
export default {
  name: "DeleteAllButton",
  methods: {
    deleteCompletedTodos() {
      this.$emit("deleteCompletedTodos");
    },
  },
};
</script>

<style scoped>
button {
  background-color: #c93b3b;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
  margin-left: auto;
  outline: none;
  padding: 1rem 1.5rem;
  transition: all 0.3s;
}
button:hover {
  background-color: #e24646;
}

button:active {
  background-color: #c02323;
}

button span {
  font-size: 20px;
}
</style>
