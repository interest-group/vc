<template>
  <article class="vc-article" :style="{width, height}"><slot></slot></article>
</template>

<script>
export default {
  name: 'vc-article',
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
