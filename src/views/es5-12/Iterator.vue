<template></template>

<script setup lang='ts'>
// 迭代器

// 迭代器是很基础的数据结构，一个标准的迭代器结构会提供一个next()方法，返回结构如下：
// - value() 本次拿到的值
// - done 一个标识符
// Symbol(Symbol.iteratoe): f values() 是一个迭代器接口

// 遍历 - 键值对/原型莲/可枚举属性（值可枚举可遍历/否则不遍历该值）/迭代器接口/Symbol（一系列内容）

// 普通业务
// - 对象取键值对用 for...in / Object.en
// - 对象取键用 Object.keys()
// - 对象取值用 Object.values()
// - 数/数组/数组对象/字符串/map/set用 for...of / forEach / for循环

// for..in 和 for..of 的区别
// - for..of 无法循环遍历对象
// - 遍历输出的结果不同
// - for..in循环遍历的是数组的键值(索引)，而for..of 循环遍历的是数组的值
// - for..in会遍历原型链上的所有属性，for..of 不会

let arr = [1, 2, 3, 4];

// for 循环
console.log("----- for循环 -----");

for (let i = 0, j = arr.length; i < j; i++) {
  console.log(i);
}

// forEach
console.log("----- forEach -----");

arr.forEach((item, index) => {
  console.log(`key:${index}, value:${item}`);
});

// for... of
// for...of 适用于遍历数/数组/数组对象/字符串/map/set等拥有迭代器对象的集合，于forEach不同的是，它可以正确的响应break/continue/return语句
console.log("----- for... of -----");

for (let i in arr) {
  console.log(i);
}

// for... in
// for... in 作用是遍历自身和继承的可枚举属性，如果只遍历自身，而不遍历继承于原型链上的属性，应启用hasOwnProperty方法过滤
console.log("----- for... in -----");

Object.prototype.myFun1 = function () {
  console.log("1");
};

Array.prototype.myFun2 = function () {
  console.log("2");
};

let arr1 = [1, 2, 3, 4];
for (let i in arr1) {
  if (arr.hasOwnProperty(i)) {
    console.log(i);
  }
}

let obj = {
  name: "mo",
  sex: "男",
  age: "26",
};

for (let i in obj) {
  console.log(i);
}

// Object.keys()
console.log("----- Object.keys() -----");
console.log(Object.keys(obj));

// Object.values()
console.log("----- Object.values() -----");
console.log(Object.values(obj));

// Object.entries()
console.log("----- Object.entries() -----");
console.log(Object.entries(obj));
let entries = Object.entries(obj);
for (let [key, value] of entries) {
  console.log(`key:${key}, value:${value}`);
}

// 难点：实现一个普通的obj能让for..offor..of 遍历
console.log("难点：实现一个普通的obj能让for..offor..of 遍历");

let obj1 = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
  // [Symbol.iterator]() {
  //   // 过滤掉非数字的索引
  //   let arr = Object.values(JSON.parse(JSON.stringify(obj1, replacer)));
  //   let index = 0;
  //   let len = arr.length;
  //   return {
  //     next: function () {
  //       if (index < len) {
  //         return {
  //           value: arr[index++],
  //           done: false,
  //         };
  //       } else {
  //         return {
  //           value: undefined,
  //           done: true,
  //         };
  //       }
  //     },
  //   };
  // },
};

// stringify 过滤函数

let replacer = function (key, value) {
  // 如果key不是数字，则过滤这个值
  if (isNaN(+key)) {
    return undefined;
  }
  return value;
};

obj1[Symbol.iterator] = function () {
  // 过滤掉非数字的索引
  let arr = Object.values(JSON.parse(JSON.stringify(obj1, replacer)));
  let index = 0;
  let len = arr.length;
  return {
    next: function () {
      if (index < len) {
        return {
          value: arr[index++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
};

console.log(obj1);

for (let i of obj1) {
  console.log(i);
}
</script>

<style scoped>
</style>