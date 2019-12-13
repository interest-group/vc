<template>
  <vc-container class="component-page">
    <vc-aside class="component-page__aside">
      <vc-menu v-model="menu">
        <vc-menu-item v-for="(route, index) in routes" :key="index"
                      :name="route.name" :to="route">{{route.meta.name}}</vc-menu-item>
      </vc-menu>
    </vc-aside>
    <vc-main class="component-page__body">
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
      routes: componentRoutes,
      menu: this.$route.name
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
  }
  &__body {
    height: 100%;
    overflow: auto;
    padding-left: 20px;
    padding-right: 30px;
  }
}
</style>
