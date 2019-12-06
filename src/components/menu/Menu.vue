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
    router: {
      type: Boolean,
      default: true
    }
  }
}
</script>
