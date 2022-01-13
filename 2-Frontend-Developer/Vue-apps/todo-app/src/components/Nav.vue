<template>
  <nav class="nav">
    <router-link to="/all">All</router-link>
    <router-link to="/active">Active</router-link>
    <router-link to="/completed">Completed</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.nav {
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.nav a {
  color: #000;
  font-weight: 600;
  padding: 1rem 0;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  width: 90px;
}
.nav a::after {
  content: "";
  background-color: #2f80ed;
  border-radius: 5px 5px 0 0;
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: transform 0.5s;
  transform: translateY(110%);
  width: 100%;
}
.nav a[aria-current="page"]::after {
  transform: translateY(0);
}
</style>
