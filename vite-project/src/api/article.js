// babel
/*
 * @Author: your name
 * @Date: 2021-07-15 12:41:20
 * @LastEditTime: 2021-07-16 08:45:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite/vite-project/src/api/article.js
 */

// mock 的文章详情数据
const data  = {
  art_id: {},
  is_followed: false,
  attitude: -1,
  aut_id: 1,
  aut_name: '大家好',
  aut_photo: 'https://v3.vuejs.org/logo.png',
  ch_id: 4,
  content: `<div class="RichText ztext Post-RichText"><p>上篇我们说了vue项目的目录设计，本篇我们来学习一下vue路由。</p><h3><b>路由的作用：</b></h3><p>在web端路由（route）就是URL到函数的映射，vue的router就像一个容器，分配，处理每一个route到URL中。</p><h3><b>文档地址：</b></h3><p>&ZeroWidthSpace;	vue路由官方文档<a href="https://link.zhihu.com/?target=https%3A//router.vuejs.org/zh/guide/%23html" class=" external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043"><span class="invisible">https://</span><span class="visible">router.vuejs.org/zh/gui</span><span class="invisible">de/#html</span><span class="ellipsis"></span></a></p><h3><b>安装：</b></h3><ul><li>通过node.js安装；</li></ul><div class="highlight"><pre><code class="language-js"><span class="nx">npm</span> <span class="nx">install</span> <span class="nx">vue</span><span class="o">-</span><span class="nx">router</span>
  </code></pre></div><figure data-size="normal"><noscript><img src="https://pic4.zhimg.com/v2-c15c63a0a13858acbd9d0335bf2cd867_b.jpg" data-caption="" data-size="normal" data-rawwidth="340" data-rawheight="134" class="content_image" width="340"/></noscript><img src="https://pic4.zhimg.com/80/v2-c15c63a0a13858acbd9d0335bf2cd867_720w.jpg" data-caption="" data-size="normal" data-rawwidth="340" data-rawheight="134" class="content_image lazy" width="340" data-actualsrc="https://pic4.zhimg.com/v2-c15c63a0a13858acbd9d0335bf2cd867_b.jpg" data-lazy-status="ok"></figure><ul><li>但是一般情况下在node中安装vue项目的时候根据提示选择安装vue-router；</li></ul><h2><b>如何使用路由：</b></h2><p>举个项目例子：</p><h2><b>1.添加路由链接,打开Nav.vue</b></h2><div class="highlight"><pre><code class="language-js">    <span class="o">&lt;</span><span class="nx">router</span><span class="o">-</span><span class="nx">link</span> <span class="nx">to</span><span class="o">=</span><span class="s2">"/goods"</span> <span class="kr">class</span><span class="o">=</span><span class="s2">"nav-item"</span><span class="o">&gt;</span><span class="nx">点菜</span><span class="o">&lt;</span><span class="err">/router-link&gt;</span>
      <span class="o">&lt;</span><span class="nx">router</span><span class="o">-</span><span class="nx">link</span> <span class="nx">to</span><span class="o">=</span><span class="s2">"/rates"</span> <span class="kr">class</span><span class="o">=</span><span class="s2">"nav-item"</span><span class="o">&gt;</span><span class="nx">评价</span><span class="o">&lt;</span><span class="err">/router-link&gt;</span>
      <span class="o">&lt;</span><span class="nx">router</span><span class="o">-</span><span class="nx">link</span> <span class="nx">to</span><span class="o">=</span><span class="s2">"/seller"</span> <span class="kr">class</span><span class="o">=</span><span class="s2">"nav-item"</span><span class="o">&gt;</span><span class="nx">商家</span><span class="o">&lt;</span><span class="err">/router-link&gt;</span>
  </code></pre></div><p><b>to</b>是路由指向的地址。</p><h2><b>2.决定将组建渲染在哪，打开App.vue，添加：</b></h2><div class="highlight"><pre><code class="language-js"><span class="o">&lt;</span><span class="nx">router</span><span class="o">-</span><span class="nx">view</span><span class="o">/&gt;</span>
  </code></pre></div><h2><b>3.配置路由,打开router文件夹下index.js</b></h2><div class="highlight"><pre><code class="language-js"><span class="kr">import</span> <span class="nx">Vue</span> <span class="nx">from</span> <span class="s1">'vue'</span>
  <span class="kr">import</span> <span class="nx">Router</span> <span class="nx">from</span> <span class="s1">'vue-router'</span>
  <span class="c1">//1.引入各个组件
  </span><span class="c1"></span><span class="kr">import</span> <span class="nx">Goods</span> <span class="nx">from</span> <span class="s1">'@/components/Goods/Goods'</span>
  <span class="kr">import</span> <span class="nx">Rates</span> <span class="nx">from</span> <span class="s1">'@/components/Rates/Rates'</span>
  <span class="kr">import</span> <span class="nx">Seller</span> <span class="nx">from</span> <span class="s1">'@/components/Seller/Seller'</span>
  <span class="err">&ZeroWidthSpace;</span>
  <span class="nx">Vue</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">Router</span><span class="p">)</span>
  <span class="c1">//2.配置路由   路径-&gt;组件
  </span><span class="c1"></span><span class="kr">export</span> <span class="k">default</span> <span class="k">new</span> <span class="nx">Router</span><span class="p">({</span>
    <span class="nx">routes</span><span class="o">:</span> <span class="p">[</span>
      <span class="p">{</span>
        <span class="nx">path</span><span class="o">:</span> <span class="s1">'/'</span><span class="p">,</span>
        <span class="nx">redirect</span><span class="o">:</span><span class="s1">'/goods'</span>
      <span class="p">},</span>
      <span class="p">{</span>
        <span class="nx">path</span><span class="o">:</span> <span class="s1">'/goods'</span><span class="p">,</span>
        <span class="nx">component</span><span class="o">:</span> <span class="nx">Goods</span>
      <span class="p">},</span>
      <span class="p">{</span>
        <span class="nx">path</span><span class="o">:</span> <span class="s1">'/rates'</span><span class="p">,</span>
        <span class="nx">component</span><span class="o">:</span> <span class="nx">Rates</span>
      <span class="p">},</span>
      <span class="p">{</span>
        <span class="nx">path</span><span class="o">:</span> <span class="s1">'/seller'</span><span class="p">,</span>
        <span class="nx">component</span><span class="o">:</span> <span class="nx">Seller</span>
      <span class="p">}</span>
    <span class="p">],</span>
    <span class="nx">linkActiveClass</span><span class="o">:</span><span class="s1">'active'</span>
  <span class="p">})</span>
  </code></pre></div><p class="ztext-empty-paragraph"><br></p><p><b>redirect</b>路由重定向：</p><p>我们在router数组设定redirect为“/goods”。那么只要路径是/。页面会跳转到"/goods"页面。</p><p><b>redirect</b>官方文档：</p><p><a href="https://link.zhihu.com/?target=https%3A//cn.vuejs.org/v2/guide/migration-vue-router.html%23router-redirect-%25E6%259B%25BF%25E6%258D%25A2" class=" external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043"><span class="invisible">https://</span><span class="visible">cn.vuejs.org/v2/guide/m</span><span class="invisible">igration-vue-router.html#router-redirect-%E6%9B%BF%E6%8D%A2</span><span class="ellipsis"></span></a></p><p>注意，当前激活导航设置方法：</p><div class="highlight"><pre><code class="language-text">linkActiveClass:'active'</code></pre></div><p class="ztext-empty-paragraph"><br></p><p><b>linkActiveClass</b>：固定属性；</p><p><b>‘active’</b>：值。是我们定义的class类；</p><figure data-size="normal"><noscript><img src="https://pic2.zhimg.com/v2-83a001b415349f74bca4781625079a0d_b.jpg" data-caption="" data-size="normal" data-rawwidth="325" data-rawheight="156" class="content_image" width="325"/></noscript><img src="https://pic2.zhimg.com/80/v2-83a001b415349f74bca4781625079a0d_720w.jpg" data-caption="" data-size="normal" data-rawwidth="325" data-rawheight="156" class="content_image lazy" width="325" data-actualsrc="https://pic2.zhimg.com/v2-83a001b415349f74bca4781625079a0d_b.jpg" data-lazy-status="ok"></figure><p>我们在点击评价的时候，会得到上图中的效果。</p><h2><b>4.路由的keep-alive</b></h2><figure data-size="normal"><noscript><img src="https://pic2.zhimg.com/v2-ee4939368c66f49cd9aa892b1cc11e6d_b.jpg" data-caption="" data-size="normal" data-rawwidth="461" data-rawheight="281" class="origin_image zh-lightbox-thumb" width="461" data-original="https://pic2.zhimg.com/v2-ee4939368c66f49cd9aa892b1cc11e6d_r.jpg"/></noscript><img src="https://pic2.zhimg.com/80/v2-ee4939368c66f49cd9aa892b1cc11e6d_720w.jpg" data-caption="" data-size="normal" data-rawwidth="461" data-rawheight="281" class="origin_image zh-lightbox-thumb lazy" width="461" data-original="https://pic2.zhimg.com/v2-ee4939368c66f49cd9aa892b1cc11e6d_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-ee4939368c66f49cd9aa892b1cc11e6d_b.jpg" data-lazy-status="ok"></figure><h3>针对于上图中的业务情况:</h3><ul><li>我们在点菜页面；</li><li>点了些食品；</li><li>那么现在购物车内会有我们点过的数据；</li><li>点击其他页面，数据需要得到保留。<br>所以使用keep-alive保留组件状态，避免重新渲染,购物车的数据丢失。</li></ul><div class="highlight"><pre><code class="language-js">        <span class="o">&lt;</span><span class="nx">keep</span><span class="o">-</span><span class="nx">alive</span><span class="o">&gt;</span>
              <span class="o">&lt;</span><span class="nx">router</span><span class="o">-</span><span class="nx">view</span> <span class="o">&gt;&lt;</span><span class="err">/router-view&gt;</span>
          <span class="o">&lt;</span><span class="err">/keep-alive&gt;</span>
  </code></pre></div><p><b>keep-alive</b>官方文档：<a href="https://link.zhihu.com/?target=https%3A//cn.vuejs.org/v2/api/%23keep-alive" class=" external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043"><span class="invisible">https://</span><span class="visible">cn.vuejs.org/v2/api/#</span><span class="invisible">keep-alive</span><span class="ellipsis"></span></a></p><h2><b>总结</b></h2><p>我们从安装，到组件配置路由再到使用keep-alive的业务场景复现，让我们对vue的router相关的技术点有了一定了解，我们将一步步完善项目，丰富我们的技术经验。</p><p>下篇我们通过axios为项目添加数据交互功能，敬请关注。</p><p></p></div>`,
  is_collected: false,
  pubdate: '2020-05-16T01:26:12',
  recomments: [],
  title: 'Vue.js',
  message: 'OK'
}

/**
 * 获取文章详情
 */
export const getArticleById = articleId => {
  // return request({
  //   method: 'GET',
  //   url: `/app/v1_0/articles/${article_id}`,
  // })
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({data: { data }})
    }, 500)
  })
}

/**
 * 关注用户
 */
export const addFollow = userId => {
  // return request({
  //   method: 'POST',
  //   url: '/app/v1_0/user/followings',
  //   data: {
  //     target: userId
  //   }
  // })
  return new Promise((resolve) => {
    setTimeout(() => {
      data.is_followed = true
      resolve({data: { data: { flag: 'S' } }})
    }, 500)
  })
}

/**
 * 取消关注用户
 */
export const deleteFollow = userId => {
  // return request({
  //   method: 'DELETE',
  //   url: `/app/v1_0/user/followings/${userId}`
  // })
  return new Promise((resolve) => {
    setTimeout(() => {
      data.is_followed = false
      resolve({data: { data: { flag: 'S' } }})
    }, 500)
  }) 
}

/**
 * 收藏文章
 */
export const addCollect = articleId => {
  // return request({
  //   method: 'POST',
  //   url: '/app/v1_0/article/collections',
  //   data: {
  //     target: articleId
  //   }
  // })
  return new Promise((resolve) => {
    setTimeout(() => {
      data.is_collected = true
      resolve({data: { data: { flag: 'S' } }})
    }, 500)
  })
}

/**
 * 取消收藏文章
 */
export const deleteCollect = articleId => {
  // return request({
  //   method: 'DELETE',
  //   url: `/app/v1_0/article/collections/${articleId}`
  // })
  return new Promise((resolve) => {
    setTimeout(() => {
      data.is_collected = false
      resolve({data: { data: { flag: 'S' } }})
    }, 500)
  }) 
}