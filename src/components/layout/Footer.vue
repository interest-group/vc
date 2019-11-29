<template>
  <footer class="vc-footer" :style="{width, height}"><slot></slot></footer>
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
