<template>
  <ul class="v-menu"><slot></slot></ul>
</template>
<script>
import { findChildComponents } from '../../utils/findComponents'
export default {
  name: 'v-menu',
  props: {
    openNames: {
      type: Array,
      default () {
        return []
      }
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    findChildComponents(this, 'v-sub-menu', true).forEach(ref => {
      ref.accordion = this.accordion
      ref.active = this.openNames.includes(ref.name)
    })
  }
}
</script>
