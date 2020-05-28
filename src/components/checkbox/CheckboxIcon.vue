<template>
  <svg version="1.1" :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
    :class="classes" @mouseover="setHover(true)" @mouseleave="setHover(false)">
    <rect class="border" rx="4" ry="4" width="16" height="16"/>
    <rect class="bg" x="1" y="1" rx="3" ry="3" width="14" height="14"/>
    <polygon class="tick" v-if="indeterminate" points="3,9 3,7 13,7 13,9"/>
    <polygon class="tick" v-else-if="value" points="6.5,12.4 2.8,8.7 4.2,7.3 6.5,9.6 11.8,4.3 13.2,5.7"/>
  </svg>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 16
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
    classes () {
      return [
        'v-checkbox-icon',
        {
          'v-checkbox-icon__value': this.value || this.indeterminate,
          'v-checkbox-icon__disabled': this.disabled,
          'v-checkbox-icon__hover': !this.value && !this.indeterminate && !this.disabled && this.hover
        }
      ]
    }
  },
  methods: {
    setHover (value) {
      this.hover = value
    }
  }
}
</script>
