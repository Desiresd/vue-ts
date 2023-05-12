<template>
  <ul>
    <item v-for="(item, index) in props.todos" :key="item.id" :index="index" :todo="item" :deleteTodo="deleteTodo"
      :updateTodo="updateTodo">
    </item>
  </ul>
</template>

<script setup lang='ts'>
import Item from './Item.vue';

const props = defineProps(['todos', 'deleteTodo', 'updateTodo'])
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  padding: 0px;
}
</style>