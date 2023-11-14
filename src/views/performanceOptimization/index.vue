<template>
  <!-- 任务切片 SetTimeout requestAnimationFrame-->
  <task-slicing />

  <!-- Web Worker 线程（与js主线程并行）-->
  <web-worker />
</template>

<script setup lang='ts'>
import TaskSlicing from "./TaskSlicing.vue";
import WebWorker from "./WebWorker.vue";
import { ref, reactive } from "vue";

// 性能优化项
</script>

<style scoped>
</style>