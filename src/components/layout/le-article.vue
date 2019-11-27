<template>
    <article class="le-article" :style="{width: width || '100%', height:height}"><slot></slot></article>
</template>

<script>
export default {
  name: 'leArticle',
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
  .le-article {
    flex:1 1 auto;
    align-self: stretch;
  }
</style>
