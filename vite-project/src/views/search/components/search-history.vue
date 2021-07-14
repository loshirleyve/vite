<!--
 * @Author: liuli
 * @Date: 2021-07-13 07:36:53
 * @LastEditTime: 2021-07-14 08:42:14
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/search/components/search-history.vue
-->
<template>
  <div class="search-history">
    <van-cell title="搜索历史">
      <div>
        <span>全部删除</span>
        &nbsp;&nbsp;
        <span>完成</span>
      </div>
      <van-icon name="delete"></van-icon>
    </van-cell>

    <van-cell
      :title="history"
      v-for="(history, index) in searchHistories"
      :key="index"
    >
      <van-icon name="close"></van-icon>
    </van-cell>
    
  </div>
</template>

<script>
export default {
  name: 'SearchHistory',
  props: {
    searchHistories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>