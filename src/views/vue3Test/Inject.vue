<template>
  <div>我是Inject</div>
  <div>{{ injectD }}</div>
</template>

<script setup lang='ts'>
import { ref, reactive, inject, createApp } from 'vue'
const injectD = inject('id')

</script>

<style scoped></style>