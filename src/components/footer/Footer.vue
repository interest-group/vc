<template>
  <footer class="vc-fotter" :style="{width:width || '100%',height: height}"><slot></slot></footer>
</template>

<script>
export default {
  name: 'vc-fotter',
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
  .vc-fotter {
    flex: 1 1 auto;
  }
</style>