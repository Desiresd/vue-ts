<template>
  <input :value="modelValue" @input="test" />
  <br>
  <span>{{ '子组件aa = ' + modelValue }}</span>
  <br>
  <input />
  <br>
  <input v-focus type="text">
</template>

<script setup lang='ts'>

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function test(e: any) {
  emit('update:modelValue', e.target.value)
}

// const vFocus = {
//   mounted: (el: any) => {
//     console.log('mount');
//     el.focus()
//   }
// }


</script>

<style scoped></style>