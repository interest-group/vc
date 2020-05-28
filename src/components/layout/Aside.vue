<template>
  <aside class="v-aside" :style="styles"><slot></slot></aside>
</template>

<script>
export default {
  name: 'v-aside',
  props: {
    width: {
      type: [String, Number],
      default: 200
    }
  },
  computed: {
    styles () {
      return {
        width: `${this.width}px`,
        minWidth: `${this.width}px`,
        maxWidth: `${this.width}px`,
        flex: `0 0 ${this.width}px`
      }
    }
  }
}
</script>
