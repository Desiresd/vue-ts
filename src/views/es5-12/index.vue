<template>
  <!-- const let -->
  <let-ant-const />

  <!-- 解构赋值 -->
  <deconstruction />

  <!-- 迭代器 Iterator -->
  <iterator />

  <!-- Promise -->
  <promise />
</template>


<script setup lang='ts'>
// ES6-12 练习
import LetAntConst from "./LetAndConst.vue";
import Deconstruction from "./deconstruction.vue";
import Iterator from "./Iterator.vue";
import Promise from "./Promise.vue";

// let obj = {};
// Object.defineProperty(obj, "a", {
//   value: "123",
//   configurable: true,
// });
// console.log(obj);
// delete obj.a;
// console.log(obj);
</script>

<style scoped>
</style>