<template>
  <div class="demo-introduce">
    <header class="demo-introduce-header">
      <img :src="logoImg" alt="" />
      <span>Viewer-Design</span>
    </header>
    <h2>介绍</h2>
    <div class="content">
      <span>Viewer Design</span>是一款基于 <span>Vue3.0</span> +
      <span>typescript</span>开发的中后台UI组件库, 组件的高配置性
      <span>+</span> 传统的UI组件库的特性
      <span>+</span> 更好的交互体验,为用户的使用提供了很大的便利
    </div>
    <h2>特性</h2>
    <div class="content">
      <ul>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i
          >丰富的组件以及功能，满足大部分中后台产品的业务场景；
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i
          >每个组件都用于高配置性，例如属性
          <span>styles</span>，满足您的各种定制化
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i
          >所有组件基于 <span>typescript</span> ,<span>CompositionAPI</span>
          以及
          <span>tsx</span>
          开发。是Vuetypescript爱好者绝佳学习对象。如果你希望使用tsx开发高质量的Vue组件，那么强烈推荐尝试基于
          <span>Viewer-Design</span> 的组件来封装
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i
          >支持组件按需引入，支持图标按需加载，组件库使用了 <span>yarn</span> +
          <span>lerna</span>
          管理模式，可以单独下载并使用某一个组件
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i
          >为了满足日常的业务需求，从使用的角度提供了更多的指令，方便快捷。例如：复制文本,避免了单独下载插件来实现
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i
          >实现过程中，所有使用到的组件都手写并且公开，没有用到任何外部组件,
          所以无需担心下载包过大
        </li>
      </ul>
    </div>
    <h2>说明</h2>
    <div class="content">
      本UI组件是小编工作之余个人完成，更多的是为了学习以及分享。参考了众多的源码组件库：例如：element-plus,
      plain-ui等，部分UI组件已经在小编公司使用，所以大家可以放心使用
    </div>
    <h2>感谢</h2>
    <div class="content">
      <ul>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <a href="http://plain-pot.gitee.io/plain-ui-doc-v3/" target="_blank"
            >plain-ui 3.0UI库</a
          >
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <a href="https://v3.cn.vuejs.org/" target="_blank">Vue3 官网地址</a>
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <a href="https://www.tslang.cn/" target="_blank"
            >TypeScript学习地址</a
          >
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <a href="https://gitee.com/element-plus/element-plus" target="_blank"
            >element-plus</a
          >
        </li>
      </ul>
    </div>
    <h2>我想提PR</h2>
    <div class="content">
      <ul>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          GitHub：<a
            target="_blank"
            href="https://github.com/a572251465/viewer-design"
            >Viewer-Design</a
          >
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          Gitee：<a
            target="_blank"
            href="https://gitee.com/li_haohao_1/viewer-design"
            >Viewer-Design</a
          >
        </li>
      </ul>
    </div>
    <h2>更多作品</h2>
    <div class="content">
      <ul>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <span>
            <a
              target="_blank"
              href="https://github.com/a572251465/postcss-transform-unit"
              >postcss-transform-unit</a
            ></span
          >
          <p>
            本插件用来做编译时候，rem, rpx, px单位转化,
            已经在我司微信小程序上使用
          </p>
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <span>
            <a target="_blank" href="http://lihh-core.top/share"
              >个人博客网站 PC版</a
            ></span
          >
          <p>会分享一些可视化, css, javascript, vue等知识文章</p>
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <span>
            <a target="_blank" href="http://lihh-core.top/mobile"
              >个人博客网站 移动版 --为了很好的体验 请在手机上查看</a
            ></span
          >
          <p>会分享一些可视化, css, javascript, vue等知识文章</p>
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <span>
            <a
              target="_blank"
              href="https://github.com/a572251465/auto-eslint-cli"
              >auto-eslint-cli</a
            ></span
          >
          <p>
            实现了eslint + prettier + commitlint + husky
            一键部署。支持多维度部署 以及版本锁定 使用工程化来完成避免手动实现
          </p>
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <span>
            <a
              target="_blank"
              href="https://github.com/a572251465/condition-filter-loader"
              >condition-filter-loader</a
            ></span
          >
          <p>
            实现了loader运行条件的过滤，使用场景：如果要压缩图片，但是业务需求是某个路径下不压缩，压缩插件本身不提供排他的参数，就可以用本插件来实现，插件起到了一个承上启下的作用
          </p>
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <span>
            <a target="_blank" href="https://github.com/a572251465/node-extra"
              >node-extra</a
            ></span
          >
          <p>
            一个node工具包，提供了很多常用的方法。例如：cp{复制文件}
            runCommand{执行命令}等方法
          </p>
        </li>
        <li>
          <div>
            <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
            single-xxx系列插件，宗旨就是用最小的体积做最伟大的事情，所以其实每个插件只实现一个功能
            <div class="margin-left">
              <h3>为什么选择single-xxx呢</h3>
              <p class="margin-left">
                1.
                每个插件都会独立完成一个完整的功能，不依赖任何第三方插件，所以无需担心额外的下载
              </p>
              <p class="margin-left">
                2. 尽可能的会更多提供config options，满足各种需求
              </p>
              <p class="margin-left">3. 大小不足1k，所以不必为大小而烦恼</p>
              <div>
                <div>
                  <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
                  <a
                    target="_blank"
                    href="https://github.com/a572251465/single-merge"
                    >single-merge</a
                  >
                </div>
                <p>
                  这个包，望文生义就是知道，知道其实是用来合并数据的，会将多个对象进行深度合并，最后会返回一个合并后的对象，但是对合并中的数组，可以通过参数来配置
                </p>
              </div>
              <div>
                <div>
                  <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
                  <a
                    target="_blank"
                    href="https://github.com/a572251465/single-throttle"
                    >single-throttle</a
                  >
                </div>
                <p>
                  single-throttle实现了节流的功能，允许配置第一个参数，实现自定义节流，允许参数穿透
                </p>
              </div>
              <div>
                <div>
                  <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
                  <a
                    target="_blank"
                    href="https://github.com/a572251465/single-cookies"
                    >single-cookies</a
                  >
                </div>
                <p>single-cookies实现了对cookie的增删改查</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <i :style="{ color: randomBk() }" class="cu-icon-star-on"></i>
          <span>
            <a target="_blank" href="https://github.com/a572251465/simple-conf"
              >simple-conf</a
            ></span
          >
          <p>
            cli脚手架-可以一键生成项目以及组件库，可以用该cli生成组件库，关于组件库的配置等用户不需要关心，统一交给脚手架来完成。架构设计中，敬请期待...
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logoImg from 'story/assets/images/logo.png'
import randomBk from 'story/utils/index'

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

<style lang="scss" scoped>
@import './index.scss';
</style>
