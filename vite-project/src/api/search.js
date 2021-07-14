// babel
/*
 * @Author: liuli
 * @Date: 2021-07-13 08:34:42
 * @LastEditTime: 2021-07-14 13:55:23
 * @LastEditors: Please set LastEditors
 * @Description: 搜索请求相关模块
 * @FilePath: /vite/vite-project/src/api/search.js
 */

export const getSearchSuggestions = q => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        a: {
          q: 'a',
          options: [
            'aaa',
            'a1',
            'a2',
            'a3'
          ]
        },
        b: {
          q: 'b',
          options: [
            'bbb',
            'b1',
            'b2',
            'b3'
          ]
        },
        v: {
          q: 'v',
          options: [
            'value',
            'val',
            'vel',
            'vvvv'
          ]
        }
      }
      const keys = Object.keys(data)
      let matchKey = ''
      keys.forEach((key) => {
        if (q.indexOf(key) > -1) {
          matchKey = key
        }
      })
      resolve({data: data[matchKey]})
    }, 500)
  })
}

// 获取搜索结果
export const getSearchResults = params => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let results = []
      if (params.page < 10) {
        results = [
          {
            title: 'aaaaaaaa'
          },
          {
            title: 'a11111'
          },
          {
            title: 'a222222'
          },
          {
            title: 'a33333'
          },
          {
            title: 'a44444'
          },
          {
            title: 'a55555'
          }
        ]
      }
      resolve({data: { data: { results } }})
    }, 500)
  })
}

// 获取用户搜索历史
export const getUserSearchHistories = () => {
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