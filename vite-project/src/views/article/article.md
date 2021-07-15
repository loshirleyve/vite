<!--
 * @Author: your name
 * @Date: 2021-07-15 12:51:03
 * @LastEditTime: 2021-07-15 12:57:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite/vite-project/src/views/article/article.md
-->
json-bigint

```
// 使用简单示例

import JSONbig from 'json-bigint'

const str = '{ "id": 1253585734669959168 }'

console.log(JSON.parse(str)) // 1253585734669959200

// 它会把超出 JS 安全整数范围的数字转化为一种类型为 BigNumber 的对象
// 我们在使用的时候需要把这个 BigNumber.toString() 就能得到原来正确的数据了
console.log(JSONbig.parse(str))
console.log(JSONbig.parse(str)).id.toString() // 1253585734669959168

const data = JSONbig.parse(str)
console.log(JSON.parse(data))
console.log(JSONbig.parse(data))

```