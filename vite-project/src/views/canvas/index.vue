<!--
 * @Author: liuli
 * @Date: 2021-07-22 07:01:40
 * @LastEditTime: 2021-07-22 07:46:51
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/canvas/index.vue
-->
<template>
  <div class="canvas-wrapper">
    <p>canvas</p>
    <canvas id="canvas" ref="canvas" width="800" height="600"></canvas>
  </div>
</template>

<script>
export default {
  name: 'CanvasIndex',
  data () {
    return {
      
    }
  },
  mounted() {
    const canvas = this.$refs.canvas
    const ctx = canvas.getContext('2d')
    // 第一个矩形为目标图像
    ctx.fillStyle = 'hotpink'
    ctx.fillRect(100, 100, 200, 200)

    /**
     * 默认为 globalCompositeOperation:source-over, 源图像叠加在目标图像上
     * console.log(ctx)
     * 
     * 在目标图像顶部显示源图像，源图像位于目标图像之外的部分是不可见的
     * ctx.globalCompositeOperation = 'source-atop'
     * 
     * 在目标图像中显示源图像。只有目标图像之内的源图像部分会显示，目标图像是透明的。
     * ctx.globalCompositeOperation = 'source-in'
     * 
     * 在目标图像之外显示源图像。只有目标图像之外的源像部分会显示，目标图像是透明的。
     * ctx.globalCompositeOperation = 'source-out'
     * 
     * 在源图像上显示目标图像。
     * ctx.globalCompositeOperation = 'destination-over'
     * 
     * 在源图像顶部显示目标图像。目标图像位于源图像之外的部分是不可见的。
     * ctx.globalCompositeOperation = 'destination-atop'
     * 
     * 在源图像中显示，目标图像只有源图像之内的目标图像部分会被显示，源图相是透明的。
     * ctx.globalCompositeOperation = 'destination-in'
     * 
     * 在源图像之外显示。目标图像只有源图像之外的目标图像部分会被显示，源图相是透明的。
     * ctx.globalCompositeOperation = 'destination-out'
     * 
     * 显示原图像+目标图像。
     * ctx.globalCompositeOperation = 'lighter'
     * 
     * 显示源图像，忽略目标图像。
     * ctx.globalCompositeOperation = 'copy'

     * xor 等同于 lighter, 使用异或操作对源图像与目标图像进行组合。
     * ctx.globalCompositeOperation = 'xor'
     */
    
    ctx.globalCompositeOperation = 'destination-out'

    // 第二个矩形为源图像
    ctx.fillStyle = 'deepskyblue'
    ctx.fillRect(200, 200, 200, 200)
  },
}
</script>

<style lang="less" scoped>

</style>