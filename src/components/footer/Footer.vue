<template>
  <footer class="vc-footer" :style="{width:width || '100%',height: height}"><slot></slot></footer>
</template>

<script>
export default {
  name: 'vc-footer',
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
  .vc-footer {
    flex: 1 1 auto;
  }
</style>
