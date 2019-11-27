<template>
  <footer class="le-fotter" :style="{width:width || '100%',height: height}"><slot></slot></footer>
</template>

<script>
export default {
  name: 'leFotter',
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
  .le-fotter {
    flex: 1 1 auto;
  }
</style>