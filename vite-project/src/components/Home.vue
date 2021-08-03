<!--
 * @Author: liuli
 * @Date: 2021-07-12 22:02:10
 * @LastEditTime: 2021-08-01 14:51:37
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
    <router-link to="/promise">
      <van-button type="primary">go promise</van-button>
    </router-link>
  </div>
</template>

<script>

export default {
  
}
</script>