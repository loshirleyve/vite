// babel
/*
 * @Author: liuli
 * @Date: 2021-08-01 14:11:59
 * @LastEditTime: 2021-08-03 08:25:24
 * @LastEditors: Please set LastEditors
 * @Description: 自定义 Promise 函数模块: IIFE
 * @FilePath: /vite/vite-project/src/views/Promise/lib/3.5.promise_all|race方法实现2.js
 */
(function(window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'
  
  /*
  Promise 构造函数
  excutor: 执行器函数(同步执行)
  */
  function Promise(excutor) {
    const self = this

    self.status = PENDING // 给 promise 对象指定 status 属性，初始值为 pending
    self.data = undefined // 给 promise 对象一个用于存储结果的属性
    self.callbacks = [] // 每个元素的结构：{ onResolved() {}, onRejected() {} }

    function resolve (value) {
      // 如果当前状态不是 prending，直接结束
      if (self.status !== PENDING) {
        return
      }

      // 将状态改为 resolved
      self.status = RESOLVED
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
      if (self.status !== PENDING) {
        return
      }
      
      // 将状态改为 rejected
      self.status = REJECTED
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
    
    // 指定函数的默认值（必须是函数）
    onResolved = typeof onResolved === 'function' ? onResolved : value => value // 向后传递成功的 value
    // 指定默认的失败的回调（实现错误/异常传透的关键点）
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason } // 向后传递失败的 reason

    const self = this
    // 返回一个新的 promise 对象
    return new Promise((resolve, reject) => {

      // 调用指定回调函数处理，根据执行结果，改变 return 的 promise 的状态
      function handle(callback) { // callback: onResolved | onRejected
        // 如果抛出异常，return 的 promise 就会失败，reason 就是 error
        // 如果回调函数返回不是 promise，return 的 promise 就会成功，value 就是返回的值
        // 如果回调函数返回是 promise，return 的 promise 结果就是这个 promise 的结果
        try {
          const result = callback(self.data)
          // 3.如果回调函数返回是 promise，return 的 promise 结果就是这个 promise 的结果
          if (result instanceof Promise) {
            result.then(
              // value => {
              //   resolve(value)
              // },
              // reason => {
              //   reject(reason)
              // }

              // value => resolve(value), // 当 result 成功时，让 return 的 promise 也成功
              // reason => reject(reason) // 当 result 失败时，让 return 的 promise 也失败
              resolve,
              reject
            )
          } else {
            // 2.如果回调函数返回不是 promise，return 的 promise 就会成功，value 就是返回的值
            resolve(result)
          }
        } catch (error) {
          // 1.如果抛出异常，return 的 promise 就会失败，reason 就是 error
          reject(error)
        }
      }

      if (self.status === PENDING) {
        // 当前状态还是 pending 状态，将回调函数保存起来
        self.callbacks.push({
          // 之所以重新定义一个 onResolved， 是因为不仅要执行回调，还要改 Promise 的状态
          onResolved () {
            handle(onResolved)
          },
          onRejected () {
            handle(onRejected)
          }
        })

      } else if (self.status === RESOLVED) { // 如果当前是 resolved 状态，异步执行 onResolve 并改变 return 的 promise 状态
        setTimeout(() => {
          handle(onResolved)
        })
      } else { // 'rejected' 如果当前是 rejected 状态，异步执行 onRejected 并改变 return 的 promise 状态
        setTimeout(() => {
          handle(onRejected)
        })
      }
    })
  }

  // Promise 原型对象的 catch()
  // 指定失败的回调函数
  // 返回一个新的 promise 对象
  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }

  // Promise 函数对象的 resolve 方法
  // 返回一个指定结果的成功的 promise
  Promise.resolve = function (value) {
    // 返回一个成功|失败的 promise
    return new Promise((resolve, reject) => {
      // value 是 promise
      if (value instanceof Promise) { // 使用 value 的结果作为 promise 的结果
        value.then(resolve, reject)
      } else { // value 不是 promise => promise 变为成功， 数据是 value
        resolve(value)
      }
    })
  }

  // Promise 函数对象的 reject 方法
  // 返回一个指定 reason 的失败的 promise
  Promise.reject = function (reason) {
    // 返回一个失败的 promise
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  // Promise 函数对象的 all 方法
  // 返回一个 promise，只有当所有的 promise 都成功才成功，否则只要有一个失败的就失败
  Promise.all = function (promises) {
    // 用来保存所有成功 value 的数组
    const values = new Array(promises.length)
    // 用来保存成功 promise 的数量
    let resolvedCount = 0

    // 返回一个新的 promise
    return new Promise((resolve, reject) => {
      // 遍历 promise 获取每个 promise 的结果
      promises.forEach((p, index) => {
        // 把 p 包一层，是为了兼容，当传入的 p 不是promise， 而直接是一个值的情况
        Promise.resolve(p).then(
          value => {
            resolvedCount++ // 成功的数量加1
            // p 成功，将成功的 value 保存 values
            // values.push(value) // 不能用 push, push 不能保证返回的顺序
            values[index] = value

            // 如果全部成功了，将 return 的 promise 改为成功
            if (resolvedCount === promises.length) {
              resolve(values)
            }
          },
          reason => { // 只要一个失败了， return 的 promise 就失败
            reject(reason)
          }
        )
      })
    })
  }

  // Promise 函数对象的 race 方法
  // 返回一个 promise，其结果由第一个完成的 promise 决定
  Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
      // 遍历 promise 获取每个 promise 的结果
      promises.forEach((p, index) => {
        // 把 p 包一层，是为了兼容，当传入的 p 不是promise， 而直接是一个值的情况
        Promise.resolve(p).then(
          value => { // 一旦有成功了，将 return 变为成功
            resolve(value)
          },
          reason => { // 只要一个失败了， return 的 promise 就失败
            reject(reason)
          }
        )
      })
    })
  }

  // 向外界暴露 Promise 函数
  window.Promise = Promise
})(window)