/*
 * @Author: liuli
 * @Date: 2021-07-12 21:47:24
 * @LastEditTime: 2021-07-12 22:37:27
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'

import router from './router'

createApp(App)
.use(router)
.use(Vant)
.mount('#app')
