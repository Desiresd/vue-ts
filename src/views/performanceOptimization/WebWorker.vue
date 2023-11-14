<template></template>

<script setup lang='ts'>
// Web Worker
console.log("----- Web Worker -----");

// Web Worker 是什么
// Web Worker 是HTML5标准的一部分，这一部分定义了一套API，允许我们在js主线程之外开辟新的Worker线程，并将一段js脚本运行其中，它赋予了开发者利用js操作多线程的能力。

// 因为是独立的线程，Worker线程与js主线程能够同时运行，互不阻塞。
// 所以在我们有大量运行任务时，可以吧运算任务交给Worker线程取处理，当Worker线程计算完成，再把结果返回给js主线程。这样，js主线程只用专注处理业务逻辑，不用耗费过多时间去处理大量复杂计算，从而减少了阻塞时间，也提高了运行效率，页面流畅度和用户体验自然而然也提高了。

//创建worker只需要通过new调用Worker()构造函数即可，它接受两个参数
// - path：有效的js脚本的地址，必须遵守同源策略。无效的js地址或者违反同源策略，会抛出SECURITY_ERR类型错误。
// - option.type：可选，用以指定worker的类型。该值可以是classic或module。如未指定，将使用默认是classic。
// - option.credentials：可选，用以指定worker凭证。该值可以是omit，same-origin，或include。如果未指定，活着type时classic，将使用默认值omit（不要求凭证）。
// - option.name：可选，在DedicatedWorkerGlobalScope的情况下，用来表示worker的scope的一个DOMString值，主要用来调试目的。

// 创建worker线程
const myWorker = new Worker(
  "/src/views/performanceOptimization/WebWorkerDispose.js"
);

// 接收worker线程传来的消息
// 方式一
myWorker.addEventListener("message", (e) => {
  console.log(e.data);
});
// 方式二
// myWorker.onmessage = (e) => {
//   console.log(e.data);
// };

// 向worker线程发送消息，对应worker线程中的e.data
myWorker.postMessage("js线程发送给worker线程的消息");

// 监听错误信息
// Web Worker提供两个事件监听错误，error和messageerror。这两个事件的的区别是：
// - error：当worker内部出现错误时触发。
// - messageerror：当message事件接收到无法被反序列化的参数时触发。
myWorker.addEventListener("error", (err) => {
  console.log(err.message);
});

myWorker.addEventListener("messageerror", (err) => {
  console.log(err.data);
});

// 关闭Worker线程
// myWorker.terminate();
</script>

<style scoped>
</style>