<template></template>

<script setup lang='ts'>
// Function 函数
console.log("Function 函数");

// ------------
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!");
  } else {
    console.log("They are the same!");
  }
}

const person = { name: "mo" };

compareMembers(person); // They are the same!

// ------------

const person3 = {
  name: "mo",
  age: 18,
};

const changeAge = (x = { ...person3 }) => (x.age += 1);
const changeAgeAndName = (x = { ...person3 }) => {
  (x.age += 1), (x.name = "Search");
};

changeAge(person3);
changeAgeAndName();
console.log(person3); // {name: 'mo', age: 19}
</script>

<style scoped>
</style>