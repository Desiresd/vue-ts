<template>
  <h3>我是子组件</h3>
  <div>{{ msg }}</div>
  <button @click="updateData">更新数据</button>
</template>

<script lang='ts'>
import { ref, defineComponent, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Child',
  beforeCreate() {
    console.log('2.x中的beforeCreate');
  },
  created() {
    console.log('2.x中的created');
  },
  beforeMount() {
    console.log('2.x中的beforeMount');
  },
  mounted() {
    console.log('2.x中的mounted');
  },
  beforeUpdate() {
    console.log('2.x中的beforeUpdate');
  },
  updated() {
    console.log('2.x中的undated');
  },
  beforeUnmount() {
    console.log('2.x中的beforeUnmount');
  },
  unmounted() {
    console.log('2.x中的unmounted');
  },
  setup() {
    console.log('3.x中的setup');
    const msg = ref('测试数据')
    const updateData = () => {
      msg.value = '更新的数据'
    }
    onBeforeMount(() => {
      console.log('3.x中的onBeforeMount');
    })
    onMounted(() => {
      console.log('3.x中的onMounted');
    })
    onBeforeUpdate(() => {
      console.log('3.x中的onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('3.x中的onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('3.x中的onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('3.x中的onUnmounted');
    })
    return { msg, updateData }
  }
})
</script>

<style scoped></style>