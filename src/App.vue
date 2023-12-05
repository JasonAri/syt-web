<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <!-- 展示路由组件的区域 -->
    <div class="content">xxx</div>
    <div class="bottom">yyy</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
body {
  background: #efefef;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  margin-top: 70px;
  width: 1200px;
  min-height: 700px;
  background-color: #bfa;
}
.bottom {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
