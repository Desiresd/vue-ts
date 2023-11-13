// 项目入口文件
import { createApp } from 'vue'
// 导入全局样式
import './style.css'
import App from './App.vue'
// 引入路由
import router from './router'

// 导入 element-plus
import ElementPlus from "element-plus";
// 导入 element-plus 样式
import "element-plus/dist/index.css";
// 导入 element-plus 图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 导入自定义指令
import directives from './directive/index.ts'

const app = createApp(App)

app.use(ElementPlus).use(router).use(directives).mount('#app')


// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
