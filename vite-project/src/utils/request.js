// babel
/*
 * @Author: liuli
 * @Date: 2021-07-16 06:53:01
 * @LastEditTime: 2021-07-16 08:49:00
 * @LastEditors: Please set LastEditors
 * @Description: 请求模块
 * @FilePath: /vite/vite-project/src/utils/request.js
 */
import axios from 'axios'
import JSONbig from 'json-bigint'

// 在非组件模块中获取 store 必须通过这种方式
// 这里单独加载 store，和在组件中 this.$store 一个东西
import store from '@/store/'

const request = axios.create({
  baseURL: 'http://', // 基础路径

  // 后端返回的数据可能不是 JSON 格式字符串
  // 如果不是的话，那么 JSONbig.parse 调用就会报错
  // 所以使用 try-catch 来捕猎异常，处理异常的发生
  transfromResponse: [function(data) {
    try {
      return JSONbig.parse(data)
    } catch (err) {
      // console.log('转换失败', err)
      // 如果转换失败了，则进入这里
      // 我们在这里把数据原封不动的直接返回给请求使用
      return data
    }

    // axios 默认在内部使用 JSON.parse 来转换处理原始数据
    // return JSON.parse(data)
  }]
})