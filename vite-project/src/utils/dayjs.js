/*
 * @Author: liuli
 * @Date: 2021-07-19 07:45:32
 * @LastEditTime: 2021-07-19 08:47:41
 * @LastEditors: Please set LastEditors
 * @Description: 初始化 dayjs 相关配置
 * @FilePath: /vite/vite-project/src/utils/dayjs.js
 */

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

// 配置使用相对时间
dayjs.extend(relativeTime)

// 配置使用中文语言包
dayjs.locale('zh-cn')

// 把处理相对时间的代码包装为全局过滤器
// 然后就可以在任何组件的模板中使用了
// 所谓的过滤器实际就是一个可以在模板中调用的函数而已，
// 在组件模板中使用过滤器：{{ xxx | relativeTime }}
// 管道符前面的内容会作为参数传递给过滤器函数
// 过滤器的返回值会渲染到使用过滤器的模板中
// Vue.filter('relativeTime', value => {
//   return dayjs(value).from(dayjs())
// })

// Vue.filter('datetime', value => {
//   return dayjs(value).format('MM-DD HH:mm')
// })

// 例如日期格式化
// console.log(dayjs().format('YYYY-MM-DD'))
console.log(dayjs('2019-01-19 15:30:30').from(dayjs()))
