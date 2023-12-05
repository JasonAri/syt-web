// vue3框架提供的方法，用于创建应用实例
import { createApp } from "vue";
// 引入默认样式
import "@/style/reset.scss";
// 引入根组件App
import App from "@/App.vue";
import HospitalTop from "@/components/hospital_top/index.vue";

// 利用createApp方法创建应用实例，且将应用实例挂载到挂载点上
const app = createApp(App);

app.component("HospitalTop", HospitalTop);
// 挂载
app.mount("#app");
