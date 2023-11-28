<template>
  <!-- const let -->
  <!-- <let-ant-const /> -->

  <!-- 解构赋值 -->
  <!-- <deconstruction /> -->

  <!-- 迭代器 Iterator -->
  <!-- <iterator /> -->

  <!-- Promise -->
  <!-- <promise /> -->

  <!-- import 导入-->
  <import-test />
</template>


<script setup lang='ts'>
// ES6-12 练习
import LetAntConst from "./01_声明.vue";
import Deconstruction from "./02_解构赋值.vue";
import Iterator from "./03_迭代器.vue";
import Promise from "./04_Promise异步.vue";
import ImportTest from "./05_Import导入.vue";

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