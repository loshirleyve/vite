// babel
/*
 * @Author: liuli
 * @Date: 2021-07-17 09:18:20
 * @LastEditTime: 2021-07-20 06:46:32
 * @LastEditors: Please set LastEditors
 * @Description: 文章评论相关请求模块
 * @FilePath: /vite/vite-project/src/api/comment.js
 */

// import request from "@/utils/request"

let commentsLength = 0
/**
 * 获取评论或评论回复
 */
export const getComments = params => {
  // return request({
  //   method: 'GET',
  //   url: '/app/v1_0/comments',
  //   params
  // })
  const results = [
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '哈1111',
      is_liking: true,
      is_top: 0,
      like_count: 3,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 4
    },
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '哈22222',
      is_liking: false,
      is_top: 0,
      like_count: 0,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 1
    },
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '哈哈哈哈',
      is_liking: false,
      is_top: 0,
      like_count: 0,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 4
    },
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '呵呵呵呵',
      is_liking: true,
      is_top: 0,
      like_count: 6,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 6
    },
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '呵呵1111',
      is_liking: true,
      is_top: 0,
      like_count: 4,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 1
    },
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '呵呵2222',
      is_liking: false,
      is_top: 0,
      like_count: 2,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 1
    },
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '哈哈哈哈',
      is_liking: true,
      is_top: 0,
      like_count: 1,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 1
    },
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '哈哈哈哈',
      is_liking: false,
      is_top: 0,
      like_count: 12,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 1
    },
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '哈哈哈哈',
      is_liking: true,
      is_top: 0,
      like_count: 10,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 1
    },
    {
      aut_id: 1111,
      aut_name: 'shirley',
      aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
      com_id: 111,
      content: '哈哈哈哈',
      is_liking: false,
      is_top: 0,
      like_count: 0,
      pubdate: '2021-05-18T15:45:33',
      reply_count: 1
    }
  ]
  const data = {
    end_id: 1577673826,
    last_id: 1580784588,
    results: [],
    total_count: 168,
    message: 'OK'
  }
  if (commentsLength < 168) {
    commentsLength += 10
    data.results = results
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: { data }})
    }, 500)
  })
}