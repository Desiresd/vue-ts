<template>
  <div class="list-select">
    <list-header :addTodo="addTodo"></list-header>
    <list-list :todos="state.todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></list-list>
    <list-footer :todos="state.todos" :selectAll="selectAll" :deleteAll="deleteAll"></list-footer>
  </div>
</template>

<script setup lang='ts'>
import ListHeader from '@/components/listSelect/Header.vue';
import ListList from '@/components/listSelect/List.vue';
import ListFooter from '@/components/listSelect/Footer.vue';
import { reactive, watch, onMounted } from 'vue'
import { Todo } from '@/types/todo';
import { saveTodos, readTodos } from '@/utils/localStorageUtils'

const state = reactive<{ todos: Todo[] }>({
  todos: []
})

onMounted(() => {
  setTimeout(() => {
    // state.todos = readTodos()
    const data = readTodos()
    state.todos = readTodos()
    console.log('===============');
    console.log(data);
  }, 500)
})

// 添加数据的方法
const addTodo = (todo: Todo) => {
  state.todos.unshift(todo)
}

// 删除数据的方法
const deleteTodo = (index: number) => {
  state.todos.splice(index, 1)
}

// 修改Todo中的isCompleted属性
const updateTodo = (todo: Todo, isCompleted: boolean) => {
  todo.isCompleted = isCompleted
}

// 全选/全部选
const selectAll = (isCompleted: boolean) => {
  for (let item of state.todos) {
    item.isCompleted = isCompleted
  }
}

// 删除已选中
const deleteAll = () => {
  state.todos = state.todos.filter(item => !item.isCompleted)
}

// 监视操作：如果todos数组的数据变化了，直接存储到浏览器的缓存中
watch(() => state.todos, saveTodos, { deep: true })

</script>

<style lang="scss" scoped>
.list-select {
  margin: 0 auto;
  width: 400px;
}
</style>