<template>
  <header class="vc-header" :style="{width, height}"><slot></slot></header>
</template>

<script>
export default {
  name: 'vc-header',
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
