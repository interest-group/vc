<template>
  <div class="vc-tabs_item" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vc-tabs-item',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
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
      show: true
    }
  },
  computed: {
    parentValue () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vc-tabs') {
          break
        }
        parent = parent.$parent
      }
      return parent
    }
  },
  methods: { }
}
</script>
