import { createRouter, createWebHistory } from "vue-router";
import All from "../views/All.vue";
import Active from "../views/Active.vue";
import Completed from "../views/Completed.vue";

const routes = [
  {
    path: "/",
    redirect: "/all"
  },
  {
    path: "/all",
    name: "All",
    component: All,
    props: true
  },
  {
    path: "/active",
    name: "Active",
    component: Active,
    props: true
  },
  {
    path: "/completed",
    name: "Completed",
    component: Completed,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
