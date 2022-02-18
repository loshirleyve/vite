/**
 * 手写 promise 加载图片
 */

// const ajax = (url) => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === '4') {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       }
//     }
//   }
//   xhr.open('get', url)
//   xhr.send()
// })


// const src = 'https://cdn.daikuan.360.cn/pic/f0d0707ba49e51dec4bfe3e6977646d7.png?max_age=2592000'

// ajax(src).then(info => console.log(info))

const ajax = (method, url) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304)) {
        resolve(xhr.responseText)
      }
    }
  }
  xhr.open(method, url)
  xhr.send()
})