<template>
  <nav class="vc-nav" :style="{width, height}"><slot></slot></nav>
</template>

<script>
export default {
  name: 'vc-nav',
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: 'auto'
    }
  }
}
</script>
