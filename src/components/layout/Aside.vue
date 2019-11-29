<template>
  <aside class="vc-aside" :style="{width, height}"><slot></slot></aside>
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
