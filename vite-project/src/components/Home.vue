<!--
 * @Author: liuli
 * @Date: 2021-07-12 22:02:10
 * @LastEditTime: 2021-08-03 18:14:11
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/components/Home.vue
-->
<template>
  <div class="home-wrap">
    <p>home</p>
    <router-link to="/search">
      <van-button type="primary">go Search</van-button>
    </router-link>
    <router-link to="/articles">
      <van-button type="primary">go Articles</van-button>
    </router-link>
    <router-link to="/canvas">
      <van-button type="primary">go Canvas</van-button>
    </router-link>
    <router-link to="/canvas-ggk">
      <van-button type="primary">go Canvas ggk</van-button>
    </router-link>
  </div>
</template>

<script>
// import { getUrl } from '@/api/index'
export default {
  data () {
    return {}
  },
  mounted () {
    // getUrl()
  }
}
</script>