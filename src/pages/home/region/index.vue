<template>
  <div class="region">
    <div class="content">
      <div class="left">地区：</div>
      <ul>
        <li class="active">全部</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li>海珠区</li>
        <li v-for="item in 10" :key="item">海珠区</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 10px;
  .content {
    display: flex;
    .left {
      min-width: 48px;
      margin-right: 10px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        cursor: pointer;
        margin: 0px 10px 5px 0px;
        &.active {
          color: #55a6fe;
        }
        &:hover {
          color: #55a6fe;
        }
      }
    }
  }
}
</style>
