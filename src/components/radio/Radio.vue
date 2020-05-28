<template>
  <div class="v-radio-wrap">
    <span :class="classes" @click="handleChange" :name="name">
      <radio-icon :value="currentValue" :disabled="disabled"></radio-icon>
      <span class="v-radio__label" v-if="label">{{label}}</span>
      <slot v-if="$slots.default"></slot>
    </span>
  </div>
</template>

<script>
import RadioIcon from './RadioIcon'
import mixin from '../../mixins/check'
export default {
  name: 'v-radio',
  mixins: [mixin],
  components: {
    RadioIcon
  },
  data () {
    return {
      is: 'radio'
    }
  },
  methods: {
    handleChange () {
      if (!this.currentValue) {
        this.handleConfirm()
      }
    }
  }
}
</script>
