<!--
 * @Author: liuli
 * @Date: 2021-07-15 07:01:08
 * @LastEditTime: 2021-07-15 08:46:09
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

    <h1 class="title">牛逼程序员都用的开源工具，你用了几个？</h1>
    <van-cell center>
      <template #title>
        <div class="name">天涯小型客</div>
      </template>
      
      <template #icon>
        <van-image
          class="avatar"
          fit="cover"
          round
          src="https://img.yzcdn.cn/vant/cat.jpeg">
          <template v-slot:error>加载失败</template>
        </van-image>
      </template>

      <template #label>
        <div class="pubdate">14小时前</div>
      </template>

      <van-button
        class="follow-btn"
        type="primary"
        round
        icon="plus"
        size="small"
      >关注</van-button>
    </van-cell>

    <div class="content"></div>
  </div>
</template>

<script>
// 在组件中获取动态路由参数：
//    方式一： this.$route.params.xxx
//    方式二： props 传参，推荐
//            this.articleId
export default {
  name: 'ArticleIndex',
  component: {},
  props: {
    articleId: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    
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
</style>