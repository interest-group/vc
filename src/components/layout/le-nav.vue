<template>
  <nav class="le-nav" :style="{width:width || '100%', height: height}"><slot></slot></nav>
</template>

<script>
export default {
  name: 'leNav',
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
  .le-nav {
    flex: 1 1 auto;
  }
</style>

