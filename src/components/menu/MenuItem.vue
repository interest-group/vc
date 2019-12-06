<template>
  <li class="vc-menu__item">
    <router-link v-if="parentData.router" :to="route"><slot></slot></router-link>
    <span v-else><slot></slot></span>
  </li>
</template>

<script>
export default {
  name: 'vc-menu-item',
  props: {
    route: Object
  },
  data () {
    return {
      parentData: {}
    }
  },
  mounted () {
    this.parentData = this.$parent.$props
  }
}
</script>
