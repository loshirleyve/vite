<!--
 * @Author: liuli
 * @Date: 2021-07-15 07:01:08
 * @LastEditTime: 2021-07-15 13:10:20
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
        :type="article.is_followed ? 'default' : primary"
        :icon="article.is_followed ? '' : plus"
        round
        size="small"
      >{{ article.is_followed ? '已关注' : '关注' }}</van-button>
    </van-cell>

    <div class="markdown-body" v-html="article.content">


    </div>
  </div>
</template>

<script>
// 在组件中获取动态路由参数：
//    方式一： this.$route.params.xxx
//    方式二： props 传参，推荐
//            this.articleId
import './github-markdown.css'
import { getArticleById } from '@/api/article'
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
      article: {}
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
</style>