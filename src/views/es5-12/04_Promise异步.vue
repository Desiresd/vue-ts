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

const myPromise = () => Promise.resolve("I have resolved");

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("first");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}

firstFunction();
secondFunction();
</script>

<style scoped>
</style>