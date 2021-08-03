// babel
/*
 * @Author: liuli
 * @Date: 2021-08-01 14:11:59
 * @LastEditTime: 2021-08-01 15:19:01
 * @LastEditors: Please set LastEditors
 * @Description: 自定义 Promise 函数模块: IIFE
 * @FilePath: /vite/vite-project/src/views/Promise/promise.js
 */
(function(window) {
  /*
  Promise 构造函数
  excutor: 执行器函数(同步执行)
  */
  function Promise(executor) {
    executor()
  }

  // Promise 原型对象的 then()
  // 指定成功和失败的回调函数
  // 返回一个新的 promise 对象
  Promise.prototype.then = function (onResolved, onRejected) {
    
  }

  // Promise 原型对象的 catch()
  // 指定失败的回调函数
  // 返回一个新的 promise 对象
  Promise.prototype.catch = function (onRejected) {

  }

  // Promise 函数对象的 resolve 方法
  // 返回一个指定结果的成功的 promise
  Promise.resolve = function (value) {
    
  }

  // Promise 函数对象的 reject 方法
  // 返回一个指定 reason 的失败的 promise
  Promise.reject = function (reason) {

  }

  // Promise 函数对象的 all 方法
  // 返回一个 promise，只有当所有的 promise 都成功才成功，否则只要有一个失败的就失败
  Promise.all = function (promises) {

  }

  // Promise 函数对象的 race 方法
  // 返回一个 promise，其结果由第一个完成的 promise 决定
  Promise.race = function (promises) {

  }

  // 向外界暴露 Promise 函数
  window.Promise = Promise
})(window)