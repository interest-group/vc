<template>
  <svg version="1.1" :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
       :class="classes" @mouseover="setHover(true)" @mouseleave="setHover(false)">
    <circle class="border" cx="8" cy="8" r="8"/>
    <circle class="bg" cx="8" cy="8" r="7"/>
    <circle class="tick" v-if="value" cx="8" cy="8" r="3"/>
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
        'v-radio-icon',
        {
          'v-radio-icon__value': this.value || this.indeterminate,
          'v-radio-icon__disabled': this.disabled,
          'v-radio-icon__hover': !this.value && !this.indeterminate && !this.disabled && this.hover
        }
      ]
    }
  },
  methods: {
    setHover (value) {
      this.hover = value
    }
  },
  components: {
  }
}
</script>
