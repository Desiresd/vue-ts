<template></template>

<script setup lang='ts'>
// Generator 生成器

console.log("Generator 生成器");

// --------------

async function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (let item of gen) {
    console.log(item); // 1 2 3
  }
})();
</script>

<style scoped>
</style>