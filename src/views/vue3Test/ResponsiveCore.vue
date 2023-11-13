<template>
  <div>我是ResponsiveCore</div>
  <div>count: {{ count }}</div>
  <div>computed1: {{ computed1 }}</div>
  <div>computed2: {{ computed2 }}</div>
</template>

<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'

// ref
const count = ref(0)
count.value = 2

// 只读computed
const computed1 = computed(() => count.value + 9)

// 可读可写computed
const computed2 = computed({
  get: () => count.value + 2,
  set: (val) => count.value = val
})
computed2.value = 12
console.log(computed2.value);



</script>

<style scoped></style>