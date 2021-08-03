<!--
 * @Author: liuli
 * @Date: 2021-08-01 14:11:43
 * @LastEditTime: 2021-08-03 08:40:43
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/Promise/index.vue
-->
<template>
  
</template>

<script>
// import './lib/Promise.js'
import './lib/Promise_class.js'
export default {
  name: 'PromiseUse',
  data () {
    return {

    }
  },
  methods: {
    
  },
  mounted () {
    // const p = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     // resolve(1)
    //     reject(2)
    //     console.log('resolve改变状态之后')
    //   }, 100)
    // }).then(
    //   value => {
    //     console.log('onResolved1()', value)
    //   },
    //   reason => {
    //     console.log('onRejected1()', reason)
    //     // return 3
    //     return new Promise((resolve, reject) => reject(5))
    //   }
    // ).then(
    //   value => {
    //     console.log('onResolved2()', value)
    //   },
    //   reason => {
    //     console.log('onRejected2()', reason)
    //     throw 6
    //   }
    // ).catch(reason => {
    //   console.log('onRejected3()', reason)
    //   return new Promise(() => {})
    // }).then(
    //   value => {
    //     console.log('onResolved4()', value)
    //   },
    //   reason => {
    //     console.log('onRejected4()', reason)
    //     throw 6
    //   }
    // )

    // 测试 resolve | reject 实现
    const p1 = Promise.resolve(2)
    const p2 = Promise.resolve(Promise.resolve(3))
    const p3 = Promise.resolve(Promise.reject(4))
    const p4 = new Promise(resolve => {
      setTimeout(() => {
        resolve(5)
      }, 1000)
    })
    const p5 = Promise.reject(6)
    // p1.then(value => console.log('p1', value))
    // p2.then(value => {
    //   console.log('p2', value)
    //   })
    // p3.catch(reason => console.log('p3', reason))

    // const pAll = Promise.all([p1, 7, p2])
    // pAll.then(
    //   value => {
    //     console.log('all onResolved()', value)
    //   },
    //   reason => {
    //     console.log('all onRejected()', reason)
    //   }
    // )
    // const pRace = Promise.race([p4, p5, 4])
    // pRace.then(
    //   value => {
    //     console.log('race onResolved()', value)
    //   },
    //   reason => {
    //     console.log('race onRejected()', reason)
    //   }
    // )

    const p6 = Promise.resolveDelay(66, 2000)
    const p7 = Promise.rejectDelay(77, 3000)
    p6.then(value => console.log(value))
    p7.catch(reason => console.log(reason))

  }
}
</script>

<style>

</style>