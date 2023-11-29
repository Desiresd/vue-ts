<template>
  <!-- const let -->
  <!-- <let-ant-const /> -->

  <!-- 解构赋值 -->
  <!-- <deconstruction /> -->

  <!-- 迭代器 Iterator -->
  <!-- <iterator /> -->

  <!-- Promise -->
  <!-- <promise /> -->

  <!-- Import 导入-->
  <!-- <import-test /> -->

  <!-- Function 函数-->
  <!-- <function-test /> -->

  <!-- Generator 生成器-->
  <!-- <generator-test /> -->

  <!-- DataType 数据类型 -->
  <data-type-test />
</template>


<script setup lang='ts'>
// ES6-12 练习
import LetAntConst from "./01_声明.vue";
import Deconstruction from "./02_解构赋值.vue";
import Iterator from "./03_迭代器.vue";
import Promise from "./04_Promise异步.vue";
import ImportTest from "./05_Import导入.vue";
import FunctionTest from "./06_Function函数.vue";
import GeneratorTest from "./07_Generator生成器.vue";
import DataTypeTest from "./08_DataType数据类型.vue";

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