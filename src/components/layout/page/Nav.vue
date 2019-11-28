<template>
  <nav class="vc-nav" :style="{width:width || '100%', height: height}"><slot></slot></nav>
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
     default : 'auto'
   },
  }
}
</script>

<style scoped>
  .vc-nav {
    flex: 1 1 auto;
  }
</style>

