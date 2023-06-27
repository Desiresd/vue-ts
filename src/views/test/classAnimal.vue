<template>
  ClassAnimal
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'

// class Animal {
//   name: string
//   constructor(theName: string) {
//     this.name = theName
//   }
//   move(distanceMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceMeters}`);
//   }
// }

// class Snike extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   move(distanceMeters = 5) {
//     console.log('Snike');
//     super.move(distanceMeters)
//   }
// }

// const snike: Animal = new Snike('蛇')
// snike.move(25)

class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
  getMeg() {
    console.log('parent->' + this.name);
  }
}

class Employee extends Person {
  readonly department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  getMeg() {
    super.getMeg()
    console.log(`${this.name}+${this.department}`);
  }
}

const employee = new Employee('mo', 'nanning')
employee.getMeg()

</script>

<style scoped></style>