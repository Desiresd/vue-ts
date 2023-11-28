<template></template>

<script setup lang='ts'>
// Promise
console.log("----- Promise -----");

let promise = new Promise((resolve, reject) => {
  console.log("1");
  console.log("2");
  resolve();
});

promise.then(() => {
  console.log("3");
});

console.log("4");
</script>

<style scoped>
</style>