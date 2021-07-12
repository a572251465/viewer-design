<template>
  <div class = "header">
    <div class = "header-logo">
      <img :src = "imgLogo" alt = "logo">
      Viewer-Design
    </div>
    <div class = "header-content">
      <div class = "header-content-input">
        <cu-input placeholder = '请搜索' v-model = 'keywordInput'/>
        <div class = "popup" v-show = "keywordInput">
          <div class = "detail" v-for = "item in menuList" :key = "item.name" @click = "skipNav(item.name)">
            <span>{{ item.name }}</span>
            <span>({{ item.remark }})</span>
          </div>
          <div class = "nodata" v-show = "menuList.length === 0">
            --- 检索不到内容哦 ----
          </div>
        </div>
      </div>
      <ul>
        <li v-for = "item in navList"
            :class = "[activeNav === item.value ? 'active' : '']"
            @click = "navClickHandle(item.value)"
            :key = "item.value">
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang = "ts">
import { defineComponent, reactive, toRefs, ref, computed } from 'vue'
import Menu from 'story/components/Menu/index'
import { IDetail, IMenuItem } from '../Menu'
import imgLogo from 'story/assets/images/logo.png'
import { useRouter } from 'vue-router'

const navList: ({ value: string, label: string })[] = [
      { label: '关于', value: 'about' },
      { label: '组件', value: 'component' },
      { label: '赞助', value: 'sponsor' },
      { label: '作品', value: 'works' },
      { label: '鸣谢', value: 'thanks' }
    ],
    menuListTarget = Menu.reduce((pre: IDetail[], cur: IMenuItem) => pre.concat(cur.detail), [])
export default defineComponent({
  name: 'home-header',
  setup() {
    const state = reactive({ navList }),
        activeNav = ref<string>('component'),
        router = useRouter(),
        keywordInput = ref<string>(''),
        compChooseShowFlag = ref<boolean>(true),
        menuList = computed(() => {
          if ( !keywordInput.value ) return []
          return menuListTarget.filter((item: IDetail) =>
              item.name.toLowerCase().indexOf(keywordInput.value) > - 1 || item.remark.indexOf(keywordInput.value) > - 1)
        })

    const navClickHandle = val => activeNav.value = val
    const skipNav = path => {
      path = path.charAt(0).toLowerCase() + path.slice(1)
      keywordInput.value = ''
      router.push({ path })
    }

    return {
      ...toRefs(state),
      activeNav,
      menuList,
      navClickHandle,
      keywordInput,
      compChooseShowFlag,
      imgLogo,
      skipNav
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
