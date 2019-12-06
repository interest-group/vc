<template>
  <vc-container class="components-page">
    <vc-aside class="components-page__aside">
      <vc-menu :router="router">
        <vc-menu-item v-for="(route, index) in routes" :key="index" :route="route" >
          {{route.meta.name}}
        </vc-menu-item>
        <!-- <vc-button @click="router = !router">改变点击状态</vc-button> -->
      </vc-menu>
    </vc-aside>
    <vc-main class="components-page__body">
      <router-view></router-view>
    </vc-main>
  </vc-container>
</template>

<script>
import { componentRoutes } from '@/router'
export default {
  name: 'components-page',
  components: {
  },
  data () {
    return {
      routes: componentRoutes,
      router: true
    }
  }
}
</script>
