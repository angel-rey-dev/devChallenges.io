<template>
  <form class="form" @submit.prevent="addTodo">
    <input
      class="input"
      type="text"
      placeholder="Add details"
      required
      v-model.trim="newTodo.title"
    />
    <button class="button" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      newTodo: {
        title: "",
        completed: false,
      },
    };
  },
  methods: {
    addTodo() {
      this.$emit("addTodo", this.newTodo);
      this.newTodo = {
        title: "",
        completed: false,
      };
    },
  },
};
</script>

<style>
.form {
  display: flex;
  justify-content: space-between;
  max-width: 50rem;
  padding: 1rem 0;
  width: 100%;
}

.input {
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  font-size: 1rem;
  outline: none;
  padding: 1rem;
  transition: all .5s;
  width: 80%;
}
.input:focus {
  border-color: #2f80ed;
}

.button {
  background: #2f80ed;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border: none;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 2rem;
  outline: none;
  padding: 1rem 2rem;
  transition: all 0.2s ease-in-out;
}
.button:hover {
  background: #398fff;
}
.button:active {
  background: #0c62d1;
}
</style>
