/*
 * @Author: vivi.
 * @Date: 2022-07-22 15:22:06
 * @LastEditTime: 2022-07-22 16:10:45
 * @FilePath: \demo-toutiao\src\router\index.js
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 把VueRouter实例注册到Vue实例中
Vue.use(VueRouter)

// 路由规则的数组
const routes = [
  // 定义首页的路由规则
  { path: '/', component: () => import('@/views/Home/MyHome.vue') },
  // 定义消息页的路由规则
  { path: '/message', component: () => import('@/views/Message/MyMessage.vue') },
  // 定义我的页面的路由规则
  { path: '/user', component: () => import('@/views/User/MyUser.vue') }
]

// 创建路由实例
const router = new VueRouter({
  routes
})

export default router
