<!--
 * @Author: liuli
 * @Date: 2021-07-12 22:02:10
 * @LastEditTime: 2021-07-13 08:17:55
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
      @search="onSearch"
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
  />
  <!-- /搜索联想 -->

  <!-- 历史记录 -->
  <search-history v-else />
  <!-- /历史记录 -->


</template>

<script>
import SearchSuggestion from './components/search-suggestion.vue'
import SearchHistory from './components/search-history.vue'
import SearchResult from './components/search-result.vue'

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
      isResultShow: false // 控制搜索结果的显示状态
    }
  },
  methods: {
    onSearch () {
      console.log('onsearch')

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