<template>
  <vc-container class="components-page">
    <vc-aside class="components-page__aside">
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="{name: route.name}">{{route.meta.name}}</router-link>
        </li>
      </ul>
      <vc-menu>
        <vc-menu-item v-for="(route, index) in routes" :key="index" :route="route"></vc-menu-item>
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
      routes: componentRoutes
    }
  }
}
</script>
