import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
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
