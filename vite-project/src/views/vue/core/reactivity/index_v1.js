// babel
/*
 * @Author: liuli
 * @Date: 2021-08-05 06:09:41
 * @LastEditTime: 2021-08-05 06:30:32
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/vue/core/reactivity/index.js
 */
// 响应式库

// 依赖
let currentEffect
class Dep {

  // 1. 收集依赖
  constructor (val) {
    this.effects = new Set()
    this._val = val
  }

  get value () {
    return this._val
  }

  set value (newVal) {
    this._val = newVal
  }

  depend () {
    if (currentEffect) {
      this.effects.add(currentEffect)
    }
  }

  // 2. 触发依赖
  notice () {
    // 触发一下我们之前收集到的依赖
    this.effects.forEach(effect => {
      effect()
    })
  }
}

function effectWatch(effect) {
  // 收集依赖
  currentEffect = effect
  effect()
  dep.depend()
  currentEffect = null
}

// ref -> 很像了
const dep = new Dep(10)
let b
effectWatch(() => {
  b = dep.value + 10
  console.log(b)
})

// 值发生了变更
dep.value = 20

dep.notice()