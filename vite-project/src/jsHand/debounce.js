/**
 * 防抖：事件触发后n秒内只能执行一次，n秒内再次触发事件，则重新计算函数执行时间
 * 典型使用场景：输入框动态匹配的触发
 * const debounceA = debounce(fn, time)
 */

const debounce = (fn, time) => {
  let timerout
  return () => {
    timerout && clearTimeout(timerout)
    timerout = setTimeout(() => {
      fn && fn()
    }, time)
  }
}

const a = () => {
  console.log(Date.now())
}

const debounceA = debounce(a, 2000)

// console.log(Date.now());
debounceA()
// console.log(Date.now());
debounceA()
setTimeout(() => {
  // console.log(Date.now());
  debounceA()
}, 1000)