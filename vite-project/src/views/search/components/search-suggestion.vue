<!--
 * @Author: liuli
 * @Date: 2021-07-13 07:22:48
 * @LastEditTime: 2021-07-14 08:32:24
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/search/components/search-suggestion.vue
-->

<template>
  <div class="search-suggestion">
    <van-cell 
      icon="search"
      v-for="(str, index) in suggestions"
      :key="index"
      @click="$emit('search', str)"
    >
      <template #title>
        <div v-html="highlight(str)"></div>
      </template>
      
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search'
import { debounce } from 'lodash'

export default {
  name: 'SearchSuggestion',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      suggestions: []
    }
  },
  computed: {
    htmlSuggestions () {
      
    }
  },
  mounted() {
    console.log('search suggestion')
  },
  methods: {
    highlight (str) {
      // RegExp 是正则表达式的构造函数
      // 参数1： 字符吕
      // 参数2：匹配模式
      // 返回值：正则对象
      return str.replace(
        new RegExp(this.searchText, 'gi'),
        `<span style="color: red;">${this.searchText}</span>`
      )
    }
  },
  watch: {
    searchText: {
      handler: debounce(async function (val) {
        // 找到数据接口
        // 请求获取数据
        // 模板绑定展示
        const { data } = await getSearchSuggestions(val)
        console.log(data)
        this.suggestions = data && data.options
        console.log('hello')
      }, 500),
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>