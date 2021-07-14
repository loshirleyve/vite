// babel
/*
 * @Author: liuli
 * @Date: 2021-07-14 08:46:10
 * @LastEditTime: 2021-07-14 13:20:03
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/utils/storage.js
 */

export const getItem = function(key) {
  return JSON.parse(localStorage.getItem(key))
}

export const setItem = function(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}
