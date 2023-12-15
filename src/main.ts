// vue3框架提供的方法，用于创建应用实例
import { createApp } from "vue";
// 引入默认样式
import "@/style/reset.scss";
// 引入根组件App
import App from "@/App.vue";
import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalBottom from "@/components/hospital_bottom/index.vue";
// router
import router from "@/router";
// 引入element-plus插件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

// 利用createApp方法创建应用实例，且将应用实例挂载到挂载点上
const app = createApp(App);
app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);
// 安装路由
app.use(router);
// 安装组件库
app.use(ElementPlus, {
  locale: zhCn,
});

// 挂载
app.mount("#app");
