/*
 * @Author: liuli
 * @Date: 2021-07-12 21:47:24
 * @LastEditTime: 2021-07-19 08:48:25
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'

import router from './router'
import * as dayjs from '@/utils/dayjs.js'

const app = createApp(App)

app.config.globalProperties.$filters = {
  relativeTime(value) {
    return dayjs(value).from(dayjs())
  },
  datetime(value) {
    return dayjs(value).format('MM-DD HH:mm')
  }
}

app.use(router)
.use(Vant)
.mount('#app')