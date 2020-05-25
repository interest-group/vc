<template>
  <button :class="classes" :disabled="disabled" @click="handleClick" @keydown.enter="onEnter">
    <v-icon class="v-button-icon__loading" name="loading" v-if="loading"></v-icon>
    <v-icon v-if="icon" :name="icon"></v-icon><span v-if="$slots.default"><slot></slot></span><v-icon v-if="suffixIcon" :name="suffixIcon"></v-icon>
  </button>
</template>

<script>
import { oneOf } from '../../utils/assist'
import VIcon from '../icon'
export default {
  name: 'v-button',
  components: {
    VIcon
  },
  props: {
    type: {
      validator: (value) => oneOf(value, ['default', 'info', 'success', 'warning', 'error', 'text']),
      default: 'default'
    },
    size: {
      validator: (value) => oneOf(value, ['small', 'middle', 'large']),
      default: 'middle'
    },
    keyEnter: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 前置Icon
    icon: {
      type: String,
      default: ''
    },
    // 后置Icon
    suffixIcon: {
      type: String,
      default: ''
    },
    long: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        'v-button',
        `v-button__${this.size}`,
        `v-button__${this.type}`,
        {
          'v-button__disabled': this.disabled,
          'v-button__ghost': this.ghost,
          'v-button__long': this.long,
          'v-button__loading': this.loading
        }
      ]
    }
  },
  methods: {
    onEnter (event) {
      if (this.keyEnter) {
        this.handleClick(event)
      }
    },
    handleClick (event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>
