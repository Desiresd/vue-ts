<template>
  <h4>单例模式</h4>
  <button id="loginBtn">创建登陆弹框</button>
  <button id="loginBtn1">创建登陆弹框1</button>
  <button id="iframeBtn">创建iframe第三方页面</button>
</template>

<script setup lang='ts'>
// 设计模式 - 单例模式
import { dividerProps } from 'element-plus';
import { ref, reactive, nextTick, onMounted } from 'vue'

//实现单例模式

var Singleton = function (name: string) {
  this.name = name
}

Singleton.instance = null
Singleton.prototype.getName = function () {
  alert(this.name)
}

// Singleton.getInstance = function (name) {
//   if (!this.instance) {
//     this.instance = new Singleton(name)
//   }
//   return this.instance
// }
// 等同于
Singleton.getInstance = (function () {
  var instance = null
  return function (name) {
    if (!instance) {
      instance = new Singleton(name)
    }
    return instance
  }
})()

var a = Singleton.getInstance('sven1')
var b = Singleton.getInstance('sven2')
console.log('实现单例模式')
console.log(a === b)

// 透明的单例模式

var CreateDiv = (function () {
  var instance
  var CreateDiv = function (html) {
    if (instance) {
      return instance
    }
    this.html = html
    this.init()
    return instance = this
  }
  CreateDiv.prototype.init = function () {
    var div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
  }
  return CreateDiv
})()

var c = new CreateDiv('seven1')
var d = new CreateDiv('seven2')

console.log('透明的单例模式')
console.log(c === d)

// 代理实现单例模式

var CreateDiv1 = function (html) {
  this.html = html
  this.init()
}

CreateDiv1.prototype.init = function () {
  var div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}

// 代理类 proxySingletonCreateDiv

var proxySingletonCreateDiv = (function () {
  var instance
  return function (html) {
    if (!instance) {
      instance = new CreateDiv1(html)
    }
    return instance
  }
})()

var e = new proxySingletonCreateDiv('seven3')
var f = new proxySingletonCreateDiv('seven4')

console.log('代理实现单例模式')
console.log(e === f)

// JavaScript中的单例模式
// 单例模式的核心是确保只有一个实例，并提供全局访问

//- 对象字面量的方式
var namespace1 = {
  a: function () {
    alert(1)
  },
  b: function () {
    alert(2)
  }
}

//- 动态创建命名空间
var MyApp = {}

MyApp.namespace = function (name) {
  var parts = name.split('.')
  var current = MyApp
  for (var i in parts) {
    if (!current[parts[i]]) {
      current[parts[i]] = {}
    }
    // current = current[parts[i]]
  }
}

MyApp.namespace('event')
MyApp.namespace('dom.style')
MyApp.namespace('body.div.span')
console.log(MyApp)

//- 使用闭包封装私有变量
//- 这种方法把一些变量封装在闭包的内部，只暴露一些接口跟外界通信
var user = (function () {
  var __name = 'sven',
    __age = 29
  return {
    getUserInfo: function () {
      return __name + '-' + __age
    }
  }
})()

console.log(user.getUserInfo())

// 惰性单例（重点）
// 惰性单例指的是在需要的时候才创建对象实例
// 情景 - 登陆浮框（只在需要时创建，只创建一次）
// 缺点 - 违反单一职责原则，创建对象和管理单例的逻辑都放在createLoginLayer对象内部

var ccreateLoginLayer = (function () {
  var div
  return function () {
    if (!div) {
      div = document.createElement('div')
      div.innerHTML = '我是登陆浮框'
      div.style.display = 'none'
      document.body.appendChild(div)
    }
    return div
  }
})()

onMounted(() => {
  document.getElementById('loginBtn').onclick = function () {
    var loginLayer = ccreateLoginLayer()
    loginLayer.style.display = 'block'
  }
})

// 通用的惰性单例
// 把如何管理单例的逻辑从原来的代码中抽离出来

var getSingle = function (fn) {
  var result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

var createLoginLayer1 = function () {
  var div = document.createElement('div')
  div.innerHTML = '我是登陆浮框1'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}

var createSingleLoginLayer = getSingle(createLoginLayer1)

onMounted(() => {
  document.getElementById('loginBtn1').onclick = function () {
    var loginLayer1 = createSingleLoginLayer()
    loginLayer1.style.display = 'block'
  }
})

//- 创建唯一的iframe用于动态加载第三方页面
var createSingleIframe = getSingle(function () {
  var iframe = document.createElement('iframe')
  document.body.appendChild(iframe)
  return iframe
})

onMounted(() => {
  document.getElementById('iframeBtn').onclick = function () {
    var iframeLayer = createSingleIframe()
    iframeLayer.src = 'http://www.baidu.com/'
  }
})

</script>

<style scoped></style>