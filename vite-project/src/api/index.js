// babel
/*
 * @Author: your name
 * @Date: 2021-07-26 10:30:01
 * @LastEditTime: 2021-08-03 18:13:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite/vite-project/src/api/index.js
 */

import request from './axios/request'

const getUrl = () => {
  return request({
    url : '/users/test' // 请求地址
  })
}

export default { getUrl }
