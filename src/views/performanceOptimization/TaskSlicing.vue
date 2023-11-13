<template>
  <input type="text" />
  <button @click="addLoad1">普通执行任务</button>
  <button @click="addLoad2">执行任务（setTimeout切片任务）</button>
  <button @click="addLoad3">执行任务（requestAnimationFrame切片任务）</button>
  <!-- box容器 -->
  <div ref="boxd" class="box"></div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from "vue";

// 任务切片
console.log("任务切片");

// 卡顿分析
// 保证页面的流畅性是前端的一个主要内容，页面卡顿会严重影响用户体验。这流畅性是需要一个指标来衡量的，那就是帧率（FPS），FPS表示的是每秒钟画面更新次数，当今大多数设备的屏幕刷新率都是60次/秒。

// 不同帧率的体验
// - 帧率能够达到50～60FPS的动画将会相当流畅，让人倍感舒适；
// - 帧率在30～50FPS之间的动画，因人敏感程度不同，舒适度因人而异；
// - 帧率在30FPS以下的动画，让人感觉到明显的卡顿和不适感；
// - 帧率波动很大的动画，亦会使人感觉到卡顿。
// 也就是说想要保证页面流畅不卡顿，浏览器对每一帧画面的渲染工作需要在16ms（1000ms/60）之内完成！

// 前面我们执行任务的时候，浏览器没有能够做到每16ms渲染一次，所以我们页面会卡顿不流畅。
// 那么是什么导致了浏览器没有能够正常渲染呢？可以深入了解一下浏览器的事件循环机制。

// 浏览器事件循环机制
// 浏览器事件循环机制是一种用于处理异步任务的机制。它的工作原理是不断地检查任务队列，执行队列中的任务，并等待新的任务加入。
// 执行顺序
// -（执行宏微任务） 宏任务 -> 单个宏任务执行结束 -> 有可执行的微任务吗 ？执行所有微任务 -> 开始新的宏任务 ： 没有的话，开始新的宏任务
// - 进入update the rendering阶段，这里有个rendering oppertunity概念，浏览上下文渲染会根据屏幕刷新率、页面性能、页面是否在后台来确定是否需要渲染。而且渲染间隔通常是固定的。
// - 如果不需要渲染，以下步骤（只列举常用的）也不会运行了：
// --- run the resize steps，触发resize事件；
// --- run the scroll steps，触发scroll事件；
// --- update animatons，触发animation相关事件；
// --- run the fullscreen steps，执行requestFullscreen等api；
// --- run the animation frame callbacks，执行requestAnimationFrame回调；
// --- run IntersectionObserver callbacks，图片懒加载经常使用。
// - 重新渲染用户界面。
// - 判断宏任务队列或者微任务队列是否为空，如果为空则执行Idle空闲周期计算，判断是否需要执行requestIdleCallback的回调。

// 总结
// - 浏览器页面是否流畅取决于帧率FPS，帧率越高，页面越流畅，反之页面越卡顿。而页面帧率取决于浏览器执行渲染任务的频率（还有设备性能），同时我们知道，浏览器的渲染任务在事件循环中执行。因此我们想要页面流畅，就需要将事件循环花费的时间控制在16.7ms以内（一般设备）。
// - 此时如果我们遇到长任务导致一次事件循环时间过长，我们可以使用任务切片的方式，将其分成多次小任务执行，保证每次事件循环的时间，便能够保证页面流畅！

// box 容器溢出滚动
let boxd = ref<any>(null);

onMounted(() => {
  for (let i = 0; i < 1000; i++) {
    const myText = document.createElement("h3");
    myText.innerText = i.toString();
    boxd.value.appendChild(myText);
  }
});

// 执行任务 该方式存在长任务 花费时间多，会造成页面卡顿
function addLoad1(): void {
  console.log("执行任务");
  const total = 300000;
  for (let i = 0; i < total; i++) {
    console.log(i);
  }
}

// 使用setTimeout实现任务切片
function addLoad2(): void {
  console.log("setTimeout实现任务切片");
  let total = 300000;
  let length = 20;
  let index = 0;
  function loop(curTotal, curIndex) {
    if (curTotal <= 0) {
      return false;
    }
    let pageCount = Math.min(curTotal, length);
    setTimeout(() => {
      for (let i = index; i < index + pageCount; i++) {
        console.log(i);
      }
      index = index + pageCount;
      loop(curTotal - pageCount, curIndex + pageCount);
    }, 0);
  }
  loop(total, index);
}

// 使用requestAnimationFrame实现任务切片
// requestAnimationFrame是一个浏览器的API，它可以在浏览器完成下一次重绘之前执行一个回调函数。由于回调函数在下一次重绘之前被调用，所以它可以让浏览器有足够的时间来处理其他任务，从而避免了阻塞主线程。
function addLoad3(): void {
  console.log("requestAnimationFrame实现任务切片");
  let total = 300000;
  let length = 20;
  let index = 0;
  function loop() {
    const start = index;
    const end = Math.min(index + length, total);
    for (let i = start; i < end; i++) {
      console.log(i);
    }
    index = end;
    if (index < total) {
      requestAnimationFrame(loop);
    }
  }
  loop();
}
</script>

<style scoped>
.box {
  width: 500px;
  height: 400px;
  overflow: auto;
  margin-top: 24px;
  border: 1px solid #ccc;
}
</style>