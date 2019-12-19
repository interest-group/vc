<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
export default {
  name: 'vc-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    custom: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    classes () {
      return [
        'iconfont',
        `vc-icon-${this.name}`,
        {
          [this.custom]: this.custom
        }
      ]
    },
    styles () {
      let style = {}
      if (this.color) {
        style.color = this.color
      }
      if (this.size) {
        style['font-size'] = `${this.size}px`
      }
      return style
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
