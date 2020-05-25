<template>
  <component :is="tag" class="v-content"><slot></slot></component>
</template>

<script>
export default {
  name: 'v-content',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>
