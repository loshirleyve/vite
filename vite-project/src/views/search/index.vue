<!--
 * @Author: liuli
 * @Date: 2021-07-12 22:02:10
 * @LastEditTime: 2021-07-14 08:37:55
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/search/index.vue
-->
<template>
  <!-- 搜索栏 -->
  <!-- 
    Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮
   -->
  <form action="/">
    <van-search 
      v-model="searchText" 
      placeholder="Placeholder"
      show-action
      @search="onSearch(searchText)"
      @cancel="$router.back()"
      @focus="isResultShow = false"
    />
  </form>
  <!-- /搜索栏 -->

  <!-- 搜索结果 -->
  <search-result
    v-if="isResultShow"
    :search-text="searchText"
  />
  <!-- /搜索结果 -->

  <!-- 搜索联想 -->
  <search-suggestion
    v-else-if="searchText"
    :search-text="searchText"
    @search="onSearch"
  />
  <!-- /搜索联想 -->

  <!-- 历史记录 -->
  <search-history
    v-else
    :search-histories="searchHistories"
  />
  <!-- /历史记录 -->


</template>

<script>
import SearchSuggestion from './components/search-suggestion.vue'
import SearchHistory from './components/search-history.vue'
import SearchResult from './components/search-result.vue'

import { setItem } from '@/utils/storage'

export default {
  components: {
    SearchSuggestion,
    SearchHistory,
    SearchResult
  },
  name: 'SearchIndex',
  data () {
    return {
      searchText: '',
      isResultShow: false, // 控制搜索结果的显示状态
      searchHistories: [] // 搜索历史
    }
  },
  methods: {
    onSearch (searchText) {
      // 把输入框设置为你要搜索的文本
      this.searchText = searchText

      const index = this.searchHistories.indexOf(searchText)
      if(index !== -1) {
        // 把重复项删除
        this.searchHistories.splice(index, 1)
      }

      // 把最新的搜索历史记录放到顶部
      this.searchHistories.unshift(searchText)

      // 如果用户已登录，则把搜索记录存储到线上
      //    提示：只要我们调用获取搜索结果的数据接口，后端会给我们自动存储用户的搜索记录
      // 如果没有登录，则把搜索记录存储到本地
      setItem('search-histories', this.searchHistories)

      
      // 展示搜索结果
      this.isResultShow = true
    },
    onCancel () {
      console.log('cancel')
    }
  },
}
</script>

<style lang="less">
  #app {
    background-color: #f5f5f5;
  }
</style>