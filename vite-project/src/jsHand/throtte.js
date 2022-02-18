/**
 * 节流：n 秒内只执行一次
 * 使用 throtteFn = throtte(fn, time)
 */

const throtte = (fn, time, continueFlag = true) => {
  // 1. 执行函数
  // 2. 时间倒计时
  // 3. 再次调用时，判断时间是否仍在倒计时
  // 4. 倒计时内的执行，倒计时完是否抛弃执行
  const timer = time || 0
  let lastTime = 0
  const fnList = []
  return () => {
    fnList.push(fn)

    if (lastTime <= 0) {
      lastTime = timer
      const fn1 = fnList.shift()
      fn1 && fn1()

      const timeoutFn = () => {
        const timerout = setTimeout(() => {
          if (continueFlag && fnList.length) {
            const fn1 = fnList.shift()
            fn1 && fn1()
            timeoutFn()
          } else {
            clearTimeout(timerout)
            lastTime = 0
          }
        }, lastTime)
      }

      timeoutFn()
    }
  }
}

function a () {
  console.log(Date.now());
}

const throtteA = throtte(a, 3000)

throtteA()
throtteA()
setTimeout(throtteA, 2000)