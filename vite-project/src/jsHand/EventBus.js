/**
 * 1. 先通过调用方式反推写法
 * 2. trigger 带参数
 * 3. 多次注册事件的处理
 * 4. off 取消全部的回调，和特定的回调
 */


class EventBus {
  constructor(options) {
    this.listeners = {}
  }
  on (name, callback) {
    // 只能处理一次事件注册
    /* this.listeners.push({
      name,
      callback
    }) */

    // 处理多次事件注册, callback 得是一个数组
    this.listeners[name] ? this.listeners[name].push(callback) : this.listeners[name] = [callback]
  }

  off (name, fn) {
    // 从回调数组里删除注册的事件
    if (arguments.length === 1 || !fn) {
      this.listeners[name] = []
    }
    this.listeners[name] = this.listeners[name].filter(item => item !== fn)
  }

  once (name, callback) {
    const tempCallback =  () => {
      // 调用一次 callback
      callback()
      // 从回调数组里删除注册的事件
      this.off(name)
    }
    this.listeners.push({
      name,
      callback: tempCallback
    })
  }

  trigger (name) {
    // 事件触发带参数
    // console.log('arguments:---------->', Array.prototype.slice.call(arguments, 1));
    // console.log([...arguments].slice(1));
    const data = [...arguments].slice(1)
    // console.log(onArrNames);
    const callbacks = this.listeners[name]
    if (callbacks) {
      callbacks.forEach(item => item(...data))
    }
  }
}

const eventBus = new EventBus()

// console.log(eventBus);

eventBus.on('event', function f1 (params) {
  // console.log('on event')
  console.log('params: ', params);
})
eventBus.on('event', (params) => {
  console.log('on event1')
})

// console.log(eventBus.listeners);

// eventBus.off('event')
eventBus.off('event', function f1 (params) {
  // console.log('on event')
  console.log('params: ', params);
})
eventBus.trigger('event', { params: 'params', p: 1 }, {x: 2})
// eventBus.trigger('event')