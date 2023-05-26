// 防抖函数
type Fn = (...args: Array<any>) => any

export function Debounce<F extends Fn>(func: F, wait: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  return function (this: any, ...args: any[]) {
    const context = this
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  } as F
}
