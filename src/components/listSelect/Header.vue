<template>
  <div class="header">
    <el-input v-model="title" placeholder="请输入名称，按回车键确认" @keyup.enter="add" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const props = defineProps({
  addTodo: {
    type: Function,
    required: true
  }
})


const title = ref('')

const add = () => {
  const text = title.value
  if (!text.trim()) return
  const todo = {
    id: Date.now(),
    title: text,
    isCompleted: false
  }
  props.addTodo(todo)
  title.value = ''
}

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}
</style>