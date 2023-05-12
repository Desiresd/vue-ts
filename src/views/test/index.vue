<template>
  <class-test />
  <extend-test />
  <vue3proxy />
  <parent />
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'

import classTest from './classTest.vue';
import extendTest from './extendTest.vue';
import vue3proxy from './vue3proxy.vue';
import parent from './leftCycle/parent.vue';

</script>

<style scoped></style>ß