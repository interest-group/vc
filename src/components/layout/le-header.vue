<template>
  <header class="le-header" :style="{width:width || '100%', height: height}"><slot></slot></header>
</template>

<script>
export default {
  name: 'leHeader',
  props: {
   width: {
     type: String,
     default: ''
   },
   height: {
     type: String,
     default : ''
   },
  }
}
</script>

<style scoped>
  .le-header {
    flex: 1 1 auto;
    align-self: stretch;
  }
</style>
