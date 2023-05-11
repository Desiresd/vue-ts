<template>
  Vue Proxy+Reflect响应式原理解析
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
const user = {
  name: '章三',
  age: '18',
  wife: {
    name: '漂亮',
    age: 18
  }
}

const proxyUser = new Proxy(user, {
  // 获取目标对象的某个属性值
  get(target, prop) {
    console.log('get方法被调用了')
    return Reflect.get(target, prop)
  },
  // 修改目标对象的属性值 / 为目标对象添加新的属性
  set(target, prop, val) {
    console.log('set方法被调用了');
    return Reflect.set(target, prop, val)
  },
  // 删除目标对象上的某个属性
  deleteProperty(target, prop) {
    console.log('deleteProperty方法被调用了');
    return Reflect.deleteProperty(target, prop)
  }
})

// 通过代理对象获取目标对象中的某个属性值
console.log(proxyUser.name);
// 通过代理对象更新目标对象中的某个属性值
proxyUser.name = '里斯'
console.log(proxyUser.name);
// 通过代理对象向目标对象中添加一个新的属性值
proxyUser.cons = '我是测试的'
console.log(proxyUser);
// 通过代理对象删除目标对象的某个属性值
delete proxyUser.name
console.log(proxyUser);
delete proxyUser.wife.name
console.log(proxyUser);


</script>

<style scoped></style>