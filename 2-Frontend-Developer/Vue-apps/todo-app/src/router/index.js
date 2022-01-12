import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../views/TodoList.vue";

const routes = [
  {
    path: "/:type",
    name: "TodoList",
    component: TodoList,
    props: true
  },
  {
    path: "/",
    redirect: "/all"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
