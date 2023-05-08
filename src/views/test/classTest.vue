<template>
  classTest界面
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
interface Iperson {
  firstName: String
  lastName: String
}
class person {
  firstName: String
  lastName: String
  fullName: String
  constructor(firstName: String, lastName: String) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = this.firstName + '_' + this.lastName
  }
}
function showFullName(person: Iperson) {
  return person.firstName + '_' + person.lastName
}
let per = new person('李', '太白')
console.log(showFullName(per))

</script>

<style scoped></style>