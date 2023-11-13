import lazyload from './lazyload'
import focus from './focus'

// 自定义指令

const directives: any = {
  'lazyload': lazyload,
  'focus': focus
}

export default {
  install(app: any) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}