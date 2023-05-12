<template>
  <div class="list-select">
    <list-header></list-header>
    <list-items></list-items>
    <list-footer></list-footer>
  </div>
</template>

<script setup lang='ts'>
import ListHeader from '@/components/listSelect/header.vue';
import ListItems from '@/components/listSelect/Items.vue';
import ListFooter from '@/components/listSelect/Footer.vue';
// import { ref, reactive } from 'vue'

</script>

<style scoped>
.list-select {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>