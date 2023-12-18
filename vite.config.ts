import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 引入node内置模块path
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // src文件夹配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 配置代理跨域
  server: {
    proxy: {
      "/api": {
        target: "http://syt.atguigu.cn",
        changeOrigin: true,
      },
    },
  },
});
