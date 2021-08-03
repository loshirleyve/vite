// babel
/*
 * @Author: liuli
 * @Date: 2021-08-01 14:11:59
 * @LastEditTime: 2021-08-01 15:55:17
 * @LastEditors: Please set LastEditors
 * @Description: 自定义 Promise 函数模块: IIFE
 * @FilePath: /vite/vite-project/src/views/Promise/promise.js
 */
(function(window) {
  /*
  Promise 构造函数
  excutor: 执行器函数(同步执行)
  */
  function Promise(excutor) {
    const self = this

    self.status = 'pending' // 给 promise 对象指定 status 属性，初始值为 pending
    self.data = undefined // 给 promise 对象一个用于存储结果的属性
    self.callbacks = [] // 每个元素的结构：{ onResolved() {}, onRejected() {} }

    function resolve (value) {
      // 如果当前状态不是 prending，直接结束
      if (self.status !== 'pending') {
        return
      }

      // 将状态改为 resolved
      self.status = 'resolved'
      // 保存 value 数据
      self.data = value
      // 如果有待执行的 callback 函数，立即异步执行回调函数 onResolved
      if (self.callbacks.length > 0) {
        setTimeout(() => { // 放入队列中执行所有成功的回调
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value)
          })
        })
      }
    }

    function reject (reason) {
      // 如果当前状态不是 prending，直接结束
      if (self.status !== 'pending') {
        return
      }
      
      // 将状态改为 rejected
      self.status = 'rejected'
      // 保存 reason 数据
      self.data = reason
      // 如果有待执行的 callback 函数，立即异步执行回调函数 onRejected
      if (self.callbacks.length > 0) {
        setTimeout(() => { // 放入队列中执行所有成功的回调
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(reason)
          })
        })
      }
    }

    // 立即同步执行 excutor
    try {
      excutor(resolve, reject)
    } catch (error) { // 如果执行器抛出异常，promise 对象变为 rejected 状态
      reject(error)
    }
  }

  // Promise 原型对象的 then()
  // 指定成功和失败的回调函数
  // 返回一个新的 promise 对象
  Promise.prototype.then = function (onResolved, onRejected) {
    const self = this
    // 假设当前状态还是 pending 状态，将回调函数保存起来
    self.callbacks.push({
      onResolved,
      onRejected
    })
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