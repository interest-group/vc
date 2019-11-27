<template>
  <aside class="vc-aside" :style="{width: width || '100%', height:height}"><slot></slot></aside>
</template>

<script>
export default {
  name: 'vc-aside',
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

<style scoped>
  .vc-aside {
    flex:1 1 auto;
    align-self: stretch;
  }
</style>
