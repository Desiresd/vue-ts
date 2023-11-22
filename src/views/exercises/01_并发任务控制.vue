<template></template>

<script setup lang='ts'>
// 任务并发控制

function timeout(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

class SuperTask {
  constructor(parallelCount = 2) {
    this.parallelCount = parallelCount; // 并发数量
    this.tasks = [];
    this.runningCount = 0; // 正在执行的任务数量
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task,
        resolve,
        reject,
      });
      this._run();
    });
  }

  // 执行任务
  _run() {
    console.log(`任务队列数量${this.tasks.length}`);
    while (this.runningCount < this.parallelCount && this.tasks.length > 0) {
      const { task, resolve, reject } = this.tasks.shift();
      this.runningCount++;
      task()
        .then(resolve, reject)
        .finally(() => {
          this.runningCount--;
          this._run();
        });
    }
  }
}

const superTask = new SuperTask();

function addTask(time: number, name: any) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务${name}完成`);
    });
}

addTask(10000, 1); // 10000ms后输出，任务1
addTask(5000, 2); // 5000ms后输出，任务2
addTask(3000, 3); // 8000ms后输出，任务3
addTask(4000, 4); // 12000ms后输出，任务4
addTask(5000, 5); // 15000ms后输出，任务5
</script>

<style scoped>
</style>