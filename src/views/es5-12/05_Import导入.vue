<template></template>

<script setup lang='ts'>
console.log("running import模块");
import { sum, person, city } from "./06_Export导出.js";

console.log(sum(1, 2));

console.log(person);
person.name = "xiaoming";
console.log(person);

console.log(city);
// this.city = "dd"; // TypeError
</script>

<style scoped>
</style>./06_Export导出.js