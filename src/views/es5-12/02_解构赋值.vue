<template></template>

<script setup lang='ts'>
// 解构赋值
console.log("----- 解构赋值 -----");

// 数组解构赋值
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
let [foo1, [[bar1], baz1]] = [1, [[2], 3]];
console.log(foo1, bar1, baz1);
let [foos = true] = [];
console.log(foos);

// 对象解构赋值
let { foo2, bar2 } = { foo2: "aaa", bar2: "bbb" };
console.log(foo2, bar2);
let names;
let age;
({ a: names, b: age } = { a: "mo", b: 18 });
console.log(names, age);
let { x = 3 } = {};
console.log(x);

// 数值和布尔值的解构赋值
let { toString: s } = 123;
console.log(s);
let { toString: d } = true;
console.log(d);

// 函数的解构赋值
function add([x = 0, y = 1]) {
  return x + y;
}
console.log(add([9]));
</script>

<style scoped>
</style>