<template>
  <main :class="classes" :style="styles"><slot></slot></main>
</template>

<script>
import { oneOf } from '../../utils/assist'
export default {
  name: 'vc-main',
  props: {
    direction: {
      validator (value) {
        return oneOf(value, ['', 'horizontal', 'vertical'])
      },
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      isHorizontal: false
    }
  },
  computed: {
    classes () {
      return [
        'vc-main',
        {
          [`vc-is-${this.direction}`]: this.direction,
          'vc-is-horizontal': !this.direction && this.isHorizontal,
          'vc-is-vertical': !this.direction && !this.isHorizontal
        }
      ]
    },
    styles () {
      const styles = {}
      if (this.width) {
        styles.width = `${this.width}px`
      }
      if (this.height) {
        styles.height = `${this.height}px`
      }
      return styles
    }
  },
  mounted () {
    this.checkVertical()
  },
  methods: {
    checkVertical () {
      this.isHorizontal = Array.from(this.$children).some(vm => vm.$options.name === 'vc-aside')
    }
  }
}
</script>
