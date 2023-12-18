<template>
  <div>
    <!-- 轮播图结构 -->
    <Carousel />
    <!-- 搜索表单区域 -->
    <Search />
    <!-- 底部展示结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 等级 -->
        <Level />
        <!-- 地区 -->
        <Region />
        <!-- 医院卡片 -->
        <div class="hospital">
          <Card class="item" v-for="item in 10" :key="item" />
        </div>
        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="prev,pager,next,sizes,total"
          :total="total"
        />
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";

// 分页器需要的数据
import { ref } from "vue";
let pageNo = ref<number>(1);
let pageSize = ref<number>(10);
let total = ref<number>(11);
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0px;
  }
}
</style>
