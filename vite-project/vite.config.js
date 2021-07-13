// babel
/*
 * @Author: your name
 * @Date: 2021-07-13 10:04:58
 * @LastEditTime: 2021-07-13 13:10:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite/vite-project/vite.config.js
 */


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  server: {
    // 测试服务器开启http2
    // https: true
    open: true
  },
  plugins: [
    vue(),
    // styleImport({
    //   libs: [{
    //     libraryName: 'vant',
    //     esModule: true,
    //     resolveStyle: name => `vant/es/${name}/style`
    //   }]
    // })
  ]
})
