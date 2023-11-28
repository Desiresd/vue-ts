<template></template>

<script setup lang='ts'>
import { ref, reactive } from "vue";

console.log("订阅-发布");

// 订阅-发布（类）
// - 事件容器（数组对象）
// - 添加事件方法
// - 触发事件（循环事件数组）
// - 移除（解除订阅）

class EventCenter {
  handles: object = {};

  constructor() {
    this.handles = {};
  }
  // // 添加事件方法，params：事件名，事件方法
  addEventListener(names: any, handle: any) {
    // 创建新数组容器
    if (!this.handles[names]) {
      this.handles[names] = [];
    }
  }
}
</script>

<style scoped>
</style>