<!--
 * @Author: liuli
 * @Date: 2021-07-22 07:01:40
 * @LastEditTime: 2021-07-22 08:28:42
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /vite/vite-project/src/views/canvas/ggk/index.vue
-->
<template>
  <div class="canvas-wrapper">
    <div id="ggk" ref="ggk">
      <div id="jp">{{ bonus || '谢谢惠顾' }}</div>
      <canvas id="canvas" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CanvasIndex',
  data () {
    return {
      bonus: ''
    }
  },
  mounted() {
    const canvas = this.$refs.canvas
    const ggkDom = this.$refs.ggk
    const ctx = canvas.getContext('2d')
    // 第一个矩形为目标图像
    ctx.fillStyle = 'darkgrey'
    ctx.fillRect(0, 0, 400, 200)
    
    ctx.font = '20px'
    ctx.fillStyle = '#fff'
    ctx.fillText('刮刮卡', 140, 80)

    // 是否允许绘制
    let isDraw = false
    canvas.ontouchstart = () => {
      isDraw = true
      console.log(isDraw)
    }
    // 移动的时候绘制圆形，将源图像内的目标的内容清除掉
    canvas.ontouchmove = (e) => {
      if (isDraw) {
        const touch = e.touches[0]
        // 当前点击的页面位置 - canvas 容器的偏移量 = 当前点击位置在 canvas 中的相对位置
        const x = touch.clientX - ggkDom.offsetLeft
        const y = touch.clientY - ggkDom.offsetTop
        // 这个是关键：只显示圆之外的矩形部分，圆又是透明的
        // 在源图像之外显示。目标图像只有源图像之外的目标图像部分会被显示，源图相是透明的。
        ctx.globalCompositeOperation = 'destination-out'
        // 绘制目标图像，半径为20的圆
        ctx.arc(x, y, 20, 0, 2 * Math.PI)
        ctx.fill()
      }
    }
    canvas.ontouchend = () => {
      isDraw = false
      console.log(isDraw)
    }

    const arr = [{content: '一等奖', p: 0.1}, {content: '二等奖', p: 0.2}, {content: '三等奖', p: 0.6}, ]
    const ran = Math.random()
    if (ran < arr[0].p) {
      this.bonus = arr[0].content
    } else if (ran < arr[0].p + arr[1].p) {
      this.bonus = arr[1].content
    } else if (ran < arr[0].p + arr[1].p + arr[2].p) {
      this.bonus = arr[2].content
    }
  },
}
</script>

<style lang="less" scoped>
#ggk {
  width: 100vw;
  height: 200px;
  overflow: hidden;
}
#jp {
  width: 100%;
  height: 200px;
  position: absolute;
  left: 0;
  top: 0;
  color: pink;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 32px;
}
#canvas {
  width: 100%;
  height: 200px;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
</style>