// Worker 线程

// 接收js主线程发来的消息
self.addEventListener('message', e => {
  console.log(e.data);
  // 向js主线程发送消息，对应js主线程中的e.data
  self.postMessage('worker线程发送给js主线程的消息')

  // （宏任务）出现关闭线程就不会执行，因为这是下一次Event Loop任务队列
  setTimeout(() => {
    console.log('setTimeout worker');
  })

  // （微任务）
  Promise.resolve().then(() => {
    console.log('Promise worker')
  })

  // 关闭worker线程 不会影响本次任务队列，没有下一个Event Loop任务队列
  self.close()
})

// 接收js主线程发送的error消息
sele.addEventListener('error', err => {
  console.log(err.message);
})

// 接收js主线程发送messageerror的消息
sele.addEventListener('messageerror', err => {
  console.log(err.message);
})

// Worker 线程引用其他js文件
// 总有一些场景，需要放到worker进程取处理的任务很复杂，需要大量的处理逻辑，我们当然不想把所有代码都塞到worker.js里。
// 不出意料，Web Worker为我们提供了解决方案，我们可以在worker线程中利用importScript()方法加载我们需要的js文件，而且，通过此方法加载的js文件不受同源策略约束。

// utils.js
// const add = (a, b) => a + b

// worker.js (worker线程)
// 使用方法：importScripts(path1, path2, path3, ...)

// importScripts('./utils.js')
// console.log(add(1, 2));