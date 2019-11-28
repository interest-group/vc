<template>
  <main :class="classes" :style="{width, height}"><slot></slot></main>
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
      type: String,
      default: '100%'
    },
    height: {
      type: String,
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
