// 响应式库

let currentEffect
// 依赖
class Dep {
  constructor(val) {
    this._val = val
    this.effects = new Set()
  }
  get value() {
    this.depend()
    return this._val
  }
  set value(newVal) {
    this._val = newVal
    this.notice()
  }
  // 收集依赖
  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect)
    }
  }
  // 触发依赖
  notice() {
    // 触发一下我们之前收集到的依赖
    this.effects.forEach(effect => {
      effect()
    })
  }
}

// ref -> 很像了
const dep = new Dep(10)
export function effectWatch(effect) {
  currentEffect = effect;
  effect()
  dep.depend()
  currentEffect = null
}

/* let b
effectWatch(() => {
  b = dep.value + 10
  console.log(b);
})

dep.value = 20 */


// reactivity 针对对象或者数组
// dep -> number string
// object -> key -> dep

// 1. 这个对象在什么时候改变的
// object.a -> get
// object.a = 2 -> set

// vue2
// defineProperties

// vue3
// proxy


// 存储所有的 ref 的集合
const targetMap = new Map()

function getDep(target, key) {
  // key - dep
  // dep 我们存储在哪里
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }
  return dep
}

export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      // console.log(key);
      // key - dep
      // dep 我们存储在哪里
      const dep = getDep(target, key)

      // 收集依赖
      dep.depend()

      // return target[key]
      return Reflect.get(target, key)
    },
    set(target, key, value) {
      const dep = getDep(target, key)
      // 触发依赖
      const result = Reflect.set(target, key, value)
      dep.notice()
      return result
    }
  })
}

/* var user = reactive({
  age: 18
})

let d
effectWatch(() => {
  d = user.age
  console.log(d);
})

user.age = 20 */