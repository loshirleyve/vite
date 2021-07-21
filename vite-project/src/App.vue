<!--
 * @Author: liuli
 * @Date: 2021-07-12 21:47:24
 * @LastEditTime: 2021-07-20 06:26:24
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/App.vue
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->

  <router-view></router-view>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="less">

#app {
  color: #2c3e50;
  background-color: #f7f8fa;
  min-height: 100vh;
}
.flex {
  display: flex;
}
.flex-align(@horizion, @vertical) {
  justify-content: @horizion;
  align-content: @vertical;
}
</style>