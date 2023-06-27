<template>
  classTest界面2
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
// interface Iperson {
//   firstName: String
//   lastName: String
// }
// class person {
//   firstName: String
//   lastName: String
//   fullName: String
//   constructor(firstName: String, lastName: String) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = this.firstName + '_' + this.lastName
//   }
// }
// function showFullName(person: Iperson) {
//   return person.firstName + '_' + person.lastName
// }
// let per = new person('李', '太白1')
// console.log(showFullName(per))

// class Greeter {
//   static standardGreeting = 'Hello World'
//   greeting: string
//   greet() {
//     if (this.greeting) {
//       return 'Hello ' + this.greeting
//     } else {
//       return Greeter.standardGreeting
//     }
//   }
// }

// let greeter1: Greeter
// greeter1 = new Greeter()
// console.log(greeter1.greet())

// let greeterMaker: typeof Greeter = Greeter
// greeterMaker.standardGreeting = 'Hello Mo'

// let greeter2: Greeter = new greeterMaker()
// console.log(greeter2.greet())

// interface Named {
//   location: string
// }
// let x: Named
// let y = { name: 'mo', location: 'guangxi' }
// x = y
// console.log(x)

// 防抖节流测试
import { Throttles } from '@/common/Throttle'
import { Debounce } from '@/common/Debounce'
function foo() {
  console.log("Hello, world1!");
}

const throttledFoo = Throttles(foo, 500);
throttledFoo();
throttledFoo();
throttledFoo();

function foo1() {
  console.log("Hello, world2!");
}

const debouncedFoo = Debounce(foo1, 500);
debouncedFoo();
debouncedFoo();
debouncedFoo();

</script>

<style scoped></style>