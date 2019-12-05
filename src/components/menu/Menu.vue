<template>
  <div class="vc-menu__wrapper">
    <ul class="vc-menu">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'vc-menu',
  props: {
    router: Boolean
  },
  provide () {
    return {
      menu: this
    }
  }
}
</script>
