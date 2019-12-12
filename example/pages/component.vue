<template>
  <vc-container class="component-page">
    <vc-aside class="component-page__aside">
      <vc-menu :router="router" :unique="true" :default-opened-menus="openNames" :close-child="true">
        <vc-menu-item-group>
          <h3 slot="title">开发指南</h3>
          <vc-menu-item v-for="(route, index) in routes" :key="index" :route="route" :name="route.name">{{route.meta.name}}</vc-menu-item>
        </vc-menu-item-group>
        <vc-menu-item-group>
          <h3 slot="title">组件</h3>
          <vc-menu-item v-for="(route, index) in routes" :key="index" :route="route" :name="route.name">{{route.meta.name}}</vc-menu-item>
        </vc-menu-item-group>
      </vc-menu>
    </vc-aside>
    <vc-main class="component-page__body">
      <vc-button type="error" @click.native="toggleRouter">toggle router: {{router}}</vc-button>
      <router-view></router-view>
    </vc-main>
  </vc-container>
</template>

<script>
import { componentRoutes } from '@/router'
export default {
  name: 'component-page',
  components: {
  },
  data () {
    return {
      openNames: [1, 3],
      router: true,
      routes: componentRoutes
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
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .component-page__aside {

  }

  .component-page__body {
  }
}
</style>
