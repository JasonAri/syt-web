<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <!-- 展示路由组件的区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部全局组件 -->
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  margin-top: 70px; // HospitalTop High
  width: 1200px;
  min-height: 700px;
}
</style>
