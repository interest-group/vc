<template> 
  <aside class="le-aside" :style="{width: width || '100%', height:height}"><slot></slot></aside>  
</template>

<script>
export default {
  name: 'leAside',
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
  .le-aside {
    flex:1 1 auto;
    align-self: stretch;
  }
</style>

