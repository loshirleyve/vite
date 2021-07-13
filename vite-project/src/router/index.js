// babel
/*
 * @Author: liuli
 * @Date: 2021-07-12 21:56:11
 * @LastEditTime: 2021-07-13 07:15:05
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Search from '../views/search/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})