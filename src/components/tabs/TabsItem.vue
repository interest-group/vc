<template>
  <div class="v-tabs_item" v-show="visible"><slot></slot></div>
</template>

<script>
export default {
  name: 'v-tabs-item',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>
