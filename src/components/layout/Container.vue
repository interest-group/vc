<template>
  <div class="v-container" :class="`v-container__${this.vDirection}`"><slot></slot></div>
</template>

<script>
import { oneOf } from '../../utils/assist'
export default {
  name: 'v-container',
  props: {
    direction: {
      validator (value) {
        return oneOf(value, ['auto', 'horizontal', 'vertical'])
      },
      default: 'auto'
    }
  },
  data () {
    return {
      vDirection: this.direction
    }
  },
  mounted () {
    if (this.vDirection === 'auto') {
      this.vDirection = Array.from(this.$children).some(vm => vm.$options.name === 'v-aside') ? 'horizontal' : 'vertical'
    }
  }
}
</script>
