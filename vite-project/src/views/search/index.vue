<!--
 * @Author: liuli
 * @Date: 2021-07-12 22:02:10
 * @LastEditTime: 2021-07-15 07:39:22
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/search/index.vue
-->
<template>
  <div class="search-index">
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
      @search="onSearch"
      @update-histories="searchHistories = $event"
    />
    <!-- /历史记录 -->

  </div>

</template>

<script>
import SearchSuggestion from './components/search-suggestion.vue'
import SearchHistory from './components/search-history.vue'
import SearchResult from './components/search-result.vue'

import { getItem, setItem } from '@/utils/storage'
import { getUserSearchHistories } from '@/api/search'

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
  mounted () {
    this.loadSearchHistories()
  },
  watch: {
    searchHistories () {
      setItem('search-histories', this.searchHistories)
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
      // setItem('search-histories', this.searchHistories)  // 涉及多处处理，直接在 watch 里监听统一处理

      
      // 展示搜索结果
      this.isResultShow = true
    },
    onCancel () {
      console.log('cancel')
    },
    async loadSearchHistories () {
      // 因为后端帮我们存储的用户搜索记录太少了
      // 所以这里让后端返回的历史记录和本地的历史记录合并到一起
      // 如果用户已登录
      let searchHistories = getItem('search-histories') || []
      if (!this.user) {
        const { data } = await getUserSearchHistories()
        searchHistories = [...new Set([
          ...searchHistories,
          ...data.data.keywords
          ])]
        
      }
      
      this.searchHistories = searchHistories
    }
  }
}
</script>

<style lang="less">
  #app {
    background-color: #f5f5f5;
  }
</style>