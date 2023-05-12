// 路由入口文件
// import.meta.env.BASE_URL，它是由 Vite 提供的环境变量。对应于webpack中的process.env.BASE_URL。
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

