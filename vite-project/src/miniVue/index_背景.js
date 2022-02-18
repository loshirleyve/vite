// const { reactive, effect } = require('@vue/reactivity')
import { reactive, effectWatch } from './core/reactivity/index.js'

// v1
/* let a = 10;
let b = a + 10;
console.log(b);

a = 20
b = a + 10;
console.log(b); */


// v2
/* let a = 10
let b

update();
function update() {
  b = a + 10
  console.log(b);
}

a = 20
update(); */


// v3
// a 发生变更了，想让 b 自动更新
// 声明一个个响应式对象
// ref - > number
let b
let a = reactive({
  value: 10
})
effectWatch(() => {
  // 函数
  // 1. 一上来会执行一次
  b = a.value + 10
  console.log(b);
})
a.value = 20

const App = {
  render(context) {
    // 构建 view - b
    effectWatch(() => {
      // view 每次都要重新创建，代价太大 -> 虚拟 dom vdom
      // 要计算出最小更新点 -> vdom
      // js - diff

      // reset
      document.body.innerText = ''
      const div = document.createElement('div')
      div.innerText = context.state.count
      document.body.append(div)
    })
  },
  setup() {
    // 响应式数据
    const state = reactive({
      count: 1
    })
    window.state = state
    return { state }
  }
}

App.render(App.setup())