// babel
/*
 * @Author: liuli
 * @Date: 2021-07-12 21:56:11
 * @LastEditTime: 2021-08-01 14:17:00
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/views/articles/index.vue')
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article/index.vue'),
    // 将动态路由参数映射到组件的 props 中，无论是访问，还是维护性都很方便
    props: true
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: () => import('@/views/canvas/index.vue')
  },
  {
    path: '/canvas-ggk',
    name: 'canvas-ggk',
    component: () => import('@/views/canvas/ggk/index.vue')
  },
  {
    path: '/promise',
    name: 'promise',
    component: () => import('@/views/Promise/index.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})