<!--
 * @Author: liuli
 * @Date: 2021-07-15 07:01:08
 * @LastEditTime: 2021-07-16 08:52:49
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/article/index.vue
-->
<template>
  <div class="article-container">
    <!-- 导航栏 -->
    <van-nav-bar
      title="文章详情"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->

    <h1 class="title">{{ article.title }}</h1>
    <van-cell center>
      <template #title>
        <div class="name">{{ article.aut_name }}</div>
      </template>
      
      <template #icon>
        <van-image
          class="avatar"
          fit="cover"
          round
          :src="article.aut_photo">
          <template v-slot:error>加载失败</template>
        </van-image>
      </template>

      <template #label>
        <div class="pubdate">{{ article.pubdate }}</div>
      </template>

      <van-button
        class="follow-btn"
        :type="article.is_followed ? 'default' : 'primary'"
        :icon="article.is_followed ? '' : 'plus'"
        round
        size="small"
        :loading="isFollowLoading"
        @click="onFollow"
      >{{ article.is_followed ? '已关注' : '关注' }}</van-button>
    </van-cell>

    <div
      class="markdown-body"
      v-html="article.content"
      ref="article-content"
    >
    </div>

    <!-- 底部区域 -->
    <div class="article-bottom">
      <van-button
        class="comment-btn"
        type="default"
        round
        size="small"
      >写评论</van-button>
      <van-icon
        class="comment-o"
        name="comment-o"
        info="123"
        color="#777"
      />
      <van-icon
        class="star-o"
        :name="article.is_collected ? 'star' : 'star-o'"
        :color="article.is_collected ? 'orange': '#777'"
        @click="onCollect"
      />
      <van-icon
        class="good-job-o"
        name="good-job-o"
        color="#777"
      />
      <van-icon
        class="share"
        name="share"
        color="#777"
      />
    </div>
    <p class="bottom-place"></p>
    <!-- /底部区域 -->
  </div>
</template>

<script>
// 在组件中获取动态路由参数：
//    方式一： this.$route.params.xxx
//    方式二： props 传参，推荐
//            this.articleId
import './github-markdown.css'
import { getArticleById } from '@/api/article'

// ImagePreview 使用必须单独加载
import { ImagePreview } from 'vant'
import { 
  addFollow,
  deleteFollow,
  addCollect,
  deleteCollect
} from '@/api/article'


export default {
  name: 'ArticleIndex',
  component: {},
  props: {
    articleId: {
      type: [String, Number, Object], // json-bigint 转化后会变成 Object
      required: true
    }
  },
  data () {
    return {
      article: {},
      isFollowLoading: false // 关注用户按钮的 loading 状态
    }
  },
  computed: {},
  watch: {},
  created() {
    
  },
  mounted() {
    this.loadArticle()
  },
  methods: {
    async loadArticle () {
      const { data } = await getArticleById(this.articleId)
      this.article = data.data

      // 数据改变影响视图更新（DOM数据）不是立即的
      // 所以如果需要在修改数据之后马上操作被数据影响的视图 DOM，需要把这个代码放到 $nextTick 中
      // this.$nextTick 是 Vue 提供的一个方法
      // 参考文档: https://cn.vuejs.org/v2/api/#Vue-nextTick
      this.$nextTick(() => {
        this.handlePreviewImage()
      })

    },
    handlePreviewImage () {
      // 1. 获取文章内容 DOM 容器
      const articleContent = this.$refs['article-content']

      // 2. 得到所有的 img 标签
      const imgs = articleContent.querySelectorAll('img')
      const imgPaths = [] // 收集所有的图片路径

      // 3. 循环 img 列表，给 img 事件注册点击事件
      imgs.forEach((img, index) => {
        imgPaths.push(img.src)
        img.onclick = function () {
          // 4. 在事件处理函数中调用 ImagePreview() 预览
          ImagePreview({
            images: imgPaths,
            startPosition: index,
          })
        }
      })
    },
    async onFollow () {
      this.isFollowLoading = true
      if (this.article.is_followed) {
        // 已关注，取消关注
        await addFollow(this.article.aut_id)
      } else {
        // 没有关注，添加关注
        await deleteFollow(this.article.aut_id)
      }
      // 更新视图
      this.article.is_followed = !this.article.is_followed
      this.isFollowLoading = false
    },
    async onCollect () {
      this.$toast.loading({
        message: '操作中...',
        forbidClick: true // 禁止背景点击
      })
      if (this.article.is_collected) {
        // 已收藏，取消收藏
        await addCollect(this.article.articleId)
      } else {
        // 没有收藏，添加收藏
        await deleteCollect(this.article.articleId)
      }
      // 更新视图
      this.article.is_collected = !this.article.is_collected
      this.$toast.success(`${this.article.is_collected ? '' : '取消'}收藏成功`)
    }
  },
}
</script>

<style lang="less" scoped>
  .title {
    font-size: 20px;
    color: #3a3a3a;
    padding: 14px;
    background-color: #fff;
    margin: 0;
  }
  .avatar {
    margin-right: 8px;
    width: 35px;
    height: 35px;
  }
  .name {
    font-size: 12px;
    color: #333;
  }
  .pubdate {
    font-size: 12px;
    color: #b4b4b4;
  }
  .follow-btn {
    width: 85px;
    height: 29px;
  }

  ul {
    list-style: unset;
  }
  
  .markdown-body {
    padding: 14px;
    background-color: #fff;
  }


  // 底部按钮
  .article-bottom {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background: #fff;
    border-top: 1px solid #f6f8fa;
    padding: 10px 20px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .comment-btn {
    flex: 4;
    margin-right: 30px;
  }
  .comment-o {
    flex: 1;
    text-align: right;
  }
  .star-o {
    flex: 1;
    text-align: right;
  }
  .good-job-o {
    flex: 1;
    text-align: right;
  }
  .share {
    flex: 1;
    text-align: right;
  }
  .bottom-place {
    height: 60px;
  }
</style>