<template>
  <div>
    class的继承与多态
  </div>
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
class Animal {
  name: String
  constructor(name: String) {
    this.name = name
  }
  sound(sound: String) {
    console.log('我是叫声：' + sound)
  }
}
class Dog extends Animal {
  constructor(name: String) {
    super(name)
  }
  sound() {
    console.log('汪汪-' + this.name);
  }
}
class Pig extends Animal {
  constructor(name: String) {
    super(name)
  }
  sound() {
    console.log('呱呱-' + this.name);
    super.sound('呱呱')
  }
}

const dog = new Dog('狗')
dog.sound()
const pig = new Pig('猪')
pig.sound()
</script>

<style scoped></style>