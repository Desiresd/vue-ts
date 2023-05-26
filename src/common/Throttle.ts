// 节流

type Fn = (...args: Array<any>) => any

export function Throttles<F extends Fn>(func: F, wait: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  return function (this: any, ...args: any[]) {
    const context = this
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(context, args)
        timeoutId = undefined
      }, wait)
    }
  } as F
}