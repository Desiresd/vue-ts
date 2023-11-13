<template>
  {{ le }}
  {{ cons }}
</template>

<script setup lang='ts'>
import { ref } from "vue";

//const let
console.log("----- let const -----");

let le = ref("let");
const cons = ref("const");
console.log(le);
console.log(cons);
</script>

<style scoped>
</style>