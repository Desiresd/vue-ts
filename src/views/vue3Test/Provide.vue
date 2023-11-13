<template>
  <div>我是Provide</div>
  <inject />
</template>

<script setup lang='ts'>
import Inject from './Inject.vue'
import { ref, reactive, provide } from 'vue'
provide('id', '我是Provide的ID')
</script>

<style scoped></style>