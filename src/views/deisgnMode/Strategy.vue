<template>
  <h4>策略模式</h4>
</template>

<script setup lang='ts'>
// 设计模式 - 策略模式
import { ref, reactive } from 'vue'

// 策略算法的定义：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
// 计算奖金 - 最初的代码实现

var calculateBonus = function (performanceLevel, salary) {
  if (performanceLevel === 'S') {
    return salary * 4
  }
  if (performanceLevel === 'A') {
    return salary * 3
  }
  if (performanceLevel === 'B') {
    return salary * 2
  }
}

console.log(calculateBonus('B', 20000))
console.log(calculateBonus('S', 6000))

// 使用组合函数重构代码

var performanceS = function (salary) {
  return salary * 4
}

var performanceA = function (salary) {
  return salary * 3
}

var performanceB = function (salary) {
  return salary * 2
}

var calculateBonus1 = function (performanceLevel, salary) {
  if (performanceLevel === 'S') {
    return performanceS(salary)
  }
  if (performanceLevel === 'A') {
    return performanceA(salary)
  }
  if (performanceLevel === 'B') {
    return performanceB(salary)
  }
}

console.log(calculateBonus1('A', 10000))

// 使用策略模式重构代码
// 一个基于策模式的程序至少由两部分组成：
// 第一部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。
// 第二部分是环境类Context，Context接受客户的请求，随后吧请求委托给某一个策略类。要做到这点，说明Context中要维持对某个策略对象的引用。
//- 策略类
var performanceS1 = function () { }
performanceS1.prototype.calculate = function (salary) {
  return salary * 4
}

var performanceA1 = function () { }
performanceA1.prototype.calculate = function (salary) {
  return salary * 3
}

var performanceB1 = function () { }
performanceB1.prototype.calculate = function (salary) {
  return salary * 2
}

//- 奖金类
var Bonus = function () {
  this.salary = null // 原始工资
  this.strategy = null // 绩效等级对应的策略对象
}

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary // 设置员工的原始工资
}

Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy // 设置员工绩效等级对应的策略对象
}

Bonus.prototype.getBonus = function () {
  if (!this.strategy) {
    throw new Error('未设置strategy属性')
  }
  return this.strategy.calculate(this.salary) // 把计算奖金的操作委托给对应的策略对象
}

var bonus = new Bonus()

bonus.setSalary(10000)
bonus.setStrategy(new performanceS1())
console.log(bonus.getBonus())

bonus.setStrategy(new performanceB1())
console.log(bonus.getBonus())

// JavaScript版本的策略模式
// 实际上在JavaScript中，函数也是对象，所以更简单和直接的做法是把strategy直接定义为函数。

var strategies = {
  'S': function (salary) {
    return salary * 4
  },
  'A': function (salary) {
    return salary * 3
  },
  'B': function (salary) {
    return salary * 2
  }
}

var calculateBonus2 = function (level, salary) {
  return strategies[level](salary)
}

console.log(calculateBonus2('S', 20000))
console.log(calculateBonus2('A', 10000))

// 优点：
// 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。
// 策略模式提供了对开放-封闭原则的完美支持，将算法封装在独立的strategy中，使得它们易于切换，易于理解，易于拓展。
// 策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作。
// 在策略模式中利用组合和委托来让Context拥有执行算法的能力，这也是继承的一种方便的替代方案。

// 缺点：
// 使用策略模式会在程序中增加许多策略类或者策略对象，但实际上这比把它们负责的逻辑堆砌在Context要好。
// 使用策略模式，必须了解所有的strategy，必须了解各个strategy之间的不同点，这样才能选择一个合适的strategy。
// strategy要向客户暴露它的所有实现，这是违反最少知识原则的。

</script>

<style scoped></style>