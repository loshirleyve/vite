<!--
 * @Author: liuli
 * @Date: 2021-07-13 07:22:48
 * @LastEditTime: 2021-07-13 08:52:35
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/search/components/search-suggestion.vue
-->

<template>
  <div class="search-suggestion">
    <van-cell 
      icon="search"
      :title="str"
      v-for="(str, index) in suggestions"
      :key="index"
    ></van-cell>
  </div>
</template>

<script>
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
  mounted() {
    console.log('search suggestion')
  },
  methods: {
    getData (q) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = {
            a: {
              q: 'a',
              options: [
                'aaa',
                'a1',
                'a2',
                'a3'
              ]
            },
            b: {
              q: 'b',
              options: [
                'bbb',
                'b1',
                'b2',
                'b3'
              ]
            },
            v: {
              q: 'v',
              options: [
                'value',
                'val',
                'vel',
                'vvvv'
              ]
            }
          }
          resolve({data: data[q]})
        }, 500)
      })
    }
  },
  watch: {
    searchText: {
      handler: debounce(async function (val) {
        // 找到数据接口
        // 请求获取数据
        // 模板绑定展示
        const { data } = await this.getData(val)
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