<template>
<<<<<<< HEAD
  <vc-container class="components-page">
    <vc-aside class="components-page__aside">
      <vc-menu :router="router">
        <vc-menu-item v-for="(route, index) in routes" :key="index" :route="route" >
          {{route.meta.name}}
        </vc-menu-item>
        <!-- <vc-button @click="router = !router">改变点击状态</vc-button> -->
=======
  <vc-container class="component-page">
    <vc-aside class="component-page__aside">
      <vc-menu :router="router">
        <vc-menu-item-group title="basic">
          <vc-menu-item v-for="(route, index) in routes" :key="index" :route="route">{{route.meta.name}}</vc-menu-item>
        </vc-menu-item-group>
>>>>>>> feature-menu
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
  .component-page__body {
  }
}
</style>
