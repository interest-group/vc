<template>
  <li class="vc-menu__item">
    <router-link v-if="menu.router" :to="route"><slot></slot></router-link>
    <span v-else><slot></slot></span>
  </li>
</template>

<script>
export default {
  name: 'vc-menu-item',
  inject: ['menu'],
  props: {
    route: Object
  },
  mounted () {
  }
}
</script>
