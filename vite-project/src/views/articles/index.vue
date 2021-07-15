<!--
 * @Author: liuli
 * @Date: 2021-07-15 08:09:36
 * @LastEditTime: 2021-07-15 08:18:32
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/articles/index.vue
-->
<template>
  <div class="articles-container">
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="(item, index) in list"
          :key="item"
          :title="item"
          :to="{
            name: 'article',
            params: {
              articleId: index
            }
          }"
        />
      </van-list>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000)
    }
  },
}
</script>

<style>

</style>