import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  // 路由的模式设置
  history: createWebHistory(),
  // 路由表
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
