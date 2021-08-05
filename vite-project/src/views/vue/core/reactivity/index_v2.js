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
    this.depend()
    return this._val
  }

  set value (newVal) {
    this._val = newVal
    this.notice()
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
  // dep.depend()
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

// dep.notice()