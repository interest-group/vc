<template>
  <div class="v-collapse"><slot></slot></div>
</template>
<script>
import { findChildComponents } from '../../utils/findComponents'

export default {
  name: 'v-collapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleChange (target) {
      if (this.accordion) {
        findChildComponents(this, 'v-collapse-item').forEach(ref => {
          ref.visible = ref === target
        })
      }
    }
  }
}
</script>
