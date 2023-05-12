<template>
  <div class="footer">
    <div class="text">
      <el-checkbox v-model="isCheckAll" />
      <span>已完成{{ count }}/全部{{ todos.length }}</span>
    </div>
    <el-button type="danger" size="small" @click="delAll">删除已选中</el-button>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps({
  todos: {
    type: Array,
    required: true
  },
  selectAll: {
    type: Function,
    required: true
  },
  deleteAll: {
    type: Function,
    required: true
  }
})

const count = computed(() => {
  return props.todos.reduce((pre: number, todo) => pre + (todo.isCompleted ? 1 : 0), 0)
})

const isCheckAll = computed({
  get() {
    return count.value > 0 && props.todos.length === count.value
  },
  set(value) {
    props.selectAll(value)
  }
})

const delAll = () => {
  if (window.confirm('确定要清除吗？')) {
    props.deleteAll()
  }
}

</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  .text {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
}
</style>