// babel
/*
 * @Author: your name
 * @Date: 2021-07-15 12:41:20
 * @LastEditTime: 2021-07-15 12:43:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite/vite-project/src/api/article.js
 */


/**
 * 获取文章详情
 */
export const getArticleById = articleId => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const keywords  = [
        'aaaaaaaa',
        'a11111',
        'a222222',
        'a33333',
        'a44444',
        'a55555'
      ]
      resolve({data: { data: { keywords } }})
    }, 500)
  }) 
}