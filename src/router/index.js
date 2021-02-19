// 创建路由表
import Vue from "vue";
import Router from "vue-router";

import Login from "../views/Login.vue";
import TodoList from "../views/TodoList";

// 安装路由
Vue.use(Router);

// 配置路由
export default new Router({
  routes: [
    {
      // 路由路径
      // 原来路径是 "/login"
      path: "/",
      // 路由名称
      name: "Login",
      // 跳转到组件，这里写的是组件名
      component: Login
    },
    {
      // 路由路径
      path: "/todolist",
      name: "TodoList",
      component: TodoList
    }
  ]
});
