<template>
  <div class="v-collapse-item" @click="handleClick">
    <div class="v-collapse-item__title">
      <slot name="title">{{title}}</slot>
    </div>
    <v-slide-down :value="visible">
      <div class="v-collapse-item__content"><slot></slot></div>
    </v-slide-down>
  </div>
</template>
<script>
import VSlideDown from '../slide-down'
import { findParentComponents } from '../../utils/findComponents'
export default {
  name: 'v-collapse-item',
  components: {
    VSlideDown
  },
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleClick () {
      this.visible = !this.visible
      if (this.visible) {
        findParentComponents(this, 'v-collapse').forEach(ref => ref.handleChange(this))
      }
    }
  }
}
</script>
