<template>
  <div class="search-wrapper">
    <el-autocomplete clearable placeholder="请输入医院名称" class="form" />
    <el-button type="primary" size="default" :icon="Search"></el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.search-wrapper {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  :deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
