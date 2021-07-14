<template>
  <div class = "demo-introduce">
    <header class = "demo-introduce-header">
      <img :src = "logoImg" alt = "">
      <span>Viewer-Design</span>
    </header>
    <h2>介绍</h2>
    <div class = "content">
      <span>Viewer Design</span>是一款基于 <span>Vue3.0</span> + <span>typescript</span>开发的中后台UI组件库, 组件的高配置性 <span>+</span>
      传统的UI组件库的特性 <span>+</span> 更好的交互体验,为用户的使用提供了很大的便利
    </div>
    <h2>特性</h2>
    <div class = "content">
      <ul>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i>丰富的组件以及功能，满足大部分中后台产品的业务场景；
        </li>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i>每个组件都用于高配置性，例如属性 <span>styles</span>，满足您的各种定制化
        </li>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i>所有组件基于 <span>typescript</span> ,<span>CompositionAPI</span>
          以及
          <span>tsx</span> 开发。是Vuetypescript爱好者绝佳学习对象。如果你希望使用tsx开发高质量的Vue组件，那么强烈推荐尝试基于 <span>Viewer-Design</span> 的组件来封装
        </li>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i>支持组件按需引入，支持图标按需加载，组件库使用了 <span>yarn</span> +
          <span>lerna</span>
          管理模式，可以单独下载并使用某一个组件
        </li>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i>为了满足日常的业务需求，从使用的角度提供了更多的指令，方便快捷。例如：复制文本,避免了单独下载插件来实现
        </li>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i>实现过程中，所有使用到的组件都手写并且公开，没有用到任何外部组件, 所以无需担心下载包过大
        </li>
      </ul>
    </div>
    <h2>说明</h2>
    <div class = "content">
      本UI组件是小编工作之余个人完成，更多的是为了学习以及分享。参考了众多的源码组件库：例如：element-plus, plain-ui等，部分UI组件已经在小编公司使用，所以大家可以放心使用
    </div>
    <h2>感谢</h2>
    <div class = "content">
      <ul>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i> <a
            href = "http://plain-pot.gitee.io/plain-ui-doc-v3/" target = "_blank">plain-ui 3.0UI库</a>
        </li>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i> <a href = "https://v3.cn.vuejs.org/"
                                                                              target = "_blank">Vue3 官网地址</a>
        </li>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i> <a href = "https://www.tslang.cn/"
                                                                              target = "_blank">TypeScript学习地址</a>
        </li>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i> <a
            href = "https://gitee.com/element-plus/element-plus" target = "_blank">element-plus</a>
        </li>
      </ul>
    </div>
    <h2>我想提PR</h2>
    <div class = "content">
      <ul>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i> GitHub：<a target="_blank" href = "https://github.com/a572251465/viewer-design">Viewer-Design</a>
        </li>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i> Gitee：<a target="_blank" href = "https://gitee.com/li_haohao_1/viewer-design">Viewer-Design</a>
        </li>
      </ul>
    </div>
    <h2>更多作品</h2>
    <div class="content">
      <ul>
        <li>
          <i :style = "{color: randomBk()}" class = "cu-icon-star-on"></i> <span><a target="_blank" href = "https://github.com/a572251465/postcss-transform-unit">postcss-transform-unit</a></span>
          <p>本插件用来做编译时候，rem, rpx, px单位转化, 已经在我司微信小程序上使用</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'
import logoImg from 'story/assets/images/logo.png'

const randomBk = () => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  return `rgb(${ getRandom(0, 255) },${ getRandom(0, 255) },${ getRandom(0, 255) })`
}

export default defineComponent({
  name: 'introduce',
  setup() {

    return {
      logoImg,
      randomBk
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
