<!--
 * @Author: liuli
 * @Date: 2021-07-13 07:47:03
 * @LastEditTime: 2021-07-14 08:20:20
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/search/components/search-result.vue
-->
<template>
  <div class="search-result">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="Finished"
      @load="onLoad"
    >
      <van-cell slot="value" v-for="(item, index) in list" :key="index" :title="item.title" />
    </van-list>

  </div>
</template>

<script>
import { getSearchResults } from '@/api/search'
export default {
  name: 'SearchResult',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1, // 页码
      perPage: 10 // 每页大小
    }
  },
  methods: {
    onLoadDemo () {
      // 异步更新数据
      // seTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结果
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    async onLoad () {
      // 1，请求获取数据
      const { data } = await getSearchResults({
        page: this.page, // 页码
        per_page: this.perPage, // 每页大小
        q: this.searchText // 搜索的字符
      })

      // 2.将数据放到数据列表中
      const { results } = data.data
      this.list.push(...results)

      // 3.关闭本次的 loading
      this.loading = false

      // 4.判断是否还有数据
      if (results.length) {
        // 如果有，则更新获取下一页数据的页码
        this.page++
      } else {
        // 如果没有，则把 finished 设置为 true, 关闭加载更多
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search-result {
  position: fixed;
  left: 0;
  right: 0;
  top: 54px;
  bottom: 0;
  overflow-y: auto;
}

</style>