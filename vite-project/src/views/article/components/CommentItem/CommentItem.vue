<!--
 * @Author: liuli
 * @Date: 2021-07-19 07:04:20
 * @LastEditTime: 2021-07-20 06:45:56
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/article/components/CommentItem/CommentItem.vue
-->

<template>
  <van-cell class="comment-item">
    <template #icon>
      <van-image
        class="avatar"
        round
        fit="cover"
        :src="comment.aut_photo"
      />
    </template>
    <template #title>
      <div>
        <div class="name">{{ comment.aut_name }}</div>
        <div class="content">{{ comment.content }}</div>
        <div class="flex">
          <span class="pubdate">{{ datetime(comment.pubdate, 'MM-DD HH:mm') }}</span>
          <van-button
            class="reply-btn"
            round
            size="mini"
          >{{ comment.reply_count }} 回复</van-button>
        </div>
      </div>
    </template>
    <template #right-icon>
      <div class="like-wrap">
        <van-icon
          :name="comment.is_liking ? 'good-job' : 'good-job-o'"
          class="like-icon"
          :class="{liked: comment.is_liking}"
        />
        <span class="like-count">{{ comment.like_count }}</span>
      </div>
    </template>
    
  </van-cell>
</template>

<script>
import { datetime } from '@/utils/dayjs'
export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    datetime
  }
}
</script>

<style lang="less" scoped>

.comment-item {
  .avatar {
    width: 36px;
    height: 36px;
    margin-right: 10px;
  }
  .name {
    color: #406599;
    font-size: 14px;
    margin-right: 13px;
  }
  .contnet {
    font-size: 16px;
    color: #333;
  }
  .pubdate {
    font-size: 10px;
    margin-right: 10px;
  }
  .flex {
    align-content: center;
  }
  .like-icon.liked {
    color: orange;
  }
}
</style>>