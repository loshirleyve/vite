// const { effect, reactive } = require('@vue/reactivity')
// const { effectWatch, reactive } = require('./core/reactivity')
import { effectWatch, reactive } from './core/reactivity/index.js'

// v1
// let a = 10
// let b = a + 10
// console.log(b)

// a = 20
// b = a + 20
// console.log(b)

// v2

// let a = 10
// let b
// update()
// function  update() {
//   b = a + 10
//   console.log(b)
// }

// a = 20
// update()

// v3 用 vue 的
// a 发生变更了，我想让 b 自动更新

// 声明一个响应式对象
// ref -> number
// let a = reactive({
//   value: 1
// })
// let b
// effect(()=> {
//   // 函数
//   // 1. 会执行一下
//   b = a.value + 10
//   console.log(b)
// })

// a 响应式对象的值发生变更之后
// a.value = 10


// v4 自己写

// 声明一个响应式对象
// ref -> number
let a = reactive({
  value: 1
})
let b
effectWatch(() => {
  // 函数
  // 1. 会执行一下
  b = a.value + 10
  console.log(b)
})

// a 响应式对象的值发生变更之后
a.value = 10


// vue3
export default {
  // template -> render
  render (context) {
    // 构建视图 view = b
    effectWatch(() => {
      // view -> 每次我都需要重新的创建
      // 要计算出最小的更新点 -> vdom
      // js -> diff

      // reset
      // document.body.innerText = ''

      const div = document.createElement('div')
      div.innerText = context.state.count

      return div

      // root
      // document.body.append(div)
    })

  },
  setup () {
    // a = 响应式数据
    const state = reactive({
      count: 0
    })
    window.state = state
    return { state }
  }
}

// App.render(App.setup())

