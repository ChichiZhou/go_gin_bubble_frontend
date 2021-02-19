// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
// 将路由表放到 main.js 中
// 引入之前配的路由表
import router from "./router";
// 引入 Element-UI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入 axios
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VueRouter);
// 使用 Element-UI
Vue.use(ElementUI);
// 使用 Axios
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // 放到这里
  router,
  render: h => h(App)
});
