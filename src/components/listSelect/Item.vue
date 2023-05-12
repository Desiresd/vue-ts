<template>
  <li @mouseenter="mousehander(true)" @mouseleave="mousehander(false)"
    :style="{ backgroundColor: bgColor, color: txColor }">
    <div class="item">
      <el-checkbox v-model="isCompleted" />
      <span>{{ props.todo.title }}</span>
    </div>
    <el-button v-show="isShow" type="danger" size="small" @click="delTodo">删除</el-button>
  </li>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'
const props = defineProps({
  todo: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  deleteTodo: {
    type: Function,
    required: true
  },
  updateTodo: {
    type: Function,
    required: true
  }
})
console.log(props);
const bgColor = ref('white')
const txColor = ref('black')
const isShow = ref(false)

const mousehander = (flag: boolean) => {
  if (flag) {
    bgColor.value = 'pink'
    txColor.value = 'green'
    isShow.value = true
  } else {
    bgColor.value = 'white'
    txColor.value = 'black'
    isShow.value = false
  }
}

const delTodo = () => {
  if (window.confirm('确定要删除吗？')) {
    props.deleteTodo(props.index)
  }
}

const isCompleted = computed({
  get() {
    return props.todo.isCompleted
  },
  set(val) {
    props.updateTodo(props.todo, val)
  }
})

</script>

<style lang="scss" scoped>
li {
  list-style: none;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  div {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 5px;
  }
}
</style>