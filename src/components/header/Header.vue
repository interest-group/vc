<template>
  <header class="vc-header" :style="{width:width || '100%', height: height}"><slot></slot></header>
</template>

<script>
export default {
  name: 'vc-header',
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .vc-header {
    flex: 1 1 auto;
    align-self: stretch;
  }
</style>
