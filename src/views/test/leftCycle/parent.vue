<template>
  <h2>我是父级组件</h2>
  <button @click="show = !show">显示/隐藏</button>
  <hr>
  <child v-if="show" />
</template>

<script setup lang='ts'>
import child from './child.vue';
import { ref } from 'vue';
const show = ref(true)
</script>

<style scoped></style>