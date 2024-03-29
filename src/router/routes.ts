// 路由配置，如果路由很多，可以再拆分模块文件
// 使用 TypeScript 时需要导入路由项目的类型声明
import type { RouteRecordRaw } from 'vue-router'

// 使用路由项目类型声明一个路由数组
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index.vue')
  },
  {
    path: '/project/listSelect',
    name: 'ListSelect',
    component: () => import('@/views/listSelect/index.vue')
  },
  {
    path: '/designMode',
    name: 'designMode',
    component: () => import('@/views/deisgnMode/index.vue')
  },
  {
    path: '/vue3Test',
    name: 'vue3Test',
    component: () => import('@/views/vue3Test/index.vue')
  },
  {
    path: '/es5-12',
    name: 'Es5-12',
    component: () => import('@/views/es5-12/index.vue')
  },
  {
    path: '/performanceOptimization',
    name: 'PerformanceOptimization',
    component: () => import('@/views/performanceOptimization/index.vue')
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: () => import('@/views/exercises/index.vue')
  }
]

// 将路由数组导出给其他模块使用
export default routes