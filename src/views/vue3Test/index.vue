<template>
  <div>Vue3Test</div>

  <!-- provide inject 测试-->
  <!-- <provide /> -->

  <!-- 可写computed-->
  <!-- <responsive-core /> -->

  <!-- 父子组件v-model的测试 -->
  <input-child v-model="aa" />
  <br>
  {{ '父组件aa=' + aa }}
</template>

<script setup lang='ts'>
// import Provide from './Provide.vue'
// import ResponsiveCore from './ResponsiveCore.vue';
import inputChild from './inputChild.vue';
import { ref, reactive } from 'vue'

const aa = ref('sss')

</script>

<style scoped></style>