<template>
  <i :class="classes" @click="handleClick"></i>
</template>
<script>
export default {
  name: 'v-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return [
        'vfont',
        `vicon-${this.name}`,
        {
          [this.icon]: this.icon
        }
      ]
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
