<template>
  <vc-container class="component-page">
    <vc-aside class="component-page__aside">
      <div>
        <h2 class="title">开发指南</h2>
        <vc-menu v-model="menu">
          <vc-menu-item v-for="(route, index) in guideList" :key="index"
                        :name="route.name" :to="route">{{route.meta.name}}</vc-menu-item>
        </vc-menu>
      </div>
      <div>
        <h2 class="title">组件</h2>
        <vc-menu v-model="menu">
          <vc-menu-group v-for="(item, index) in groupList" :key="index" :title="item.title">
            <vc-menu-item :name="c.name" v-for="(c, i) in item.children" :key="i" :to="c">
              {{c.meta.name}}
            </vc-menu-item>
          </vc-menu-group>
        </vc-menu>
      </div>
    </vc-aside>
    <vc-main class="component-page__body">
      <router-view></router-view>
    </vc-main>
  </vc-container>
</template>

<script>
import { groupList, guideList } from '@/router'
export default {
  name: 'component-page',
  components: {
  },
  data () {
    return {
      menu: this.$route.name,
      guideList,
      groupList
    }
  },
  methods: {
    toggleRouter () {
      this.router = !this.router
      console.log(this.router)
    }
  }
}
</script>

<style lang="scss" scoped>
.component-page {
  height: 100%;
  &__aside {
    height: 100%;
    overflow: auto;
    padding: 50px 0;
    .title {
      padding: 15px 20px;
      font-weight: bold;
    }
  }
  &__body {
    padding: 50px 0;
    height: 100%;
    overflow: auto;
    padding-left: 20px;
    padding-right: 30px;
  }
}
</style>
