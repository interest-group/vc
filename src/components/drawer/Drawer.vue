<template>
  <div class="v-drawer__wrap">
    <transition name="v-fade-in">
      <div class="v-drawer__mask" v-if="mask" v-show="visible" @click="handleMaskClick"></div>
    </transition>
    <transition :name="`v-fade-${position}`">
      <div class="v-drawer" :class="`v-drawer__${position}`" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { oneOf } from '../../utils/assist'

export default {
  name: 'v-drawer',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      validator: (value) => oneOf(value, ['left', 'top', 'right', 'bottom']),
      default: ''
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClose: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: false
    }
  },
  watch: {
    value (value) {
      if (this.visible !== value) {
        this.visible = value
      }
    }
  },
  mounted () {
    if (this.value) {
      this.visible = this.value
    }
  },
  methods: {
    show () {
      this.visible = true
      this.$emit('input', this.visible)
    },
    hide () {
      this.visible = false
      this.$emit('input', this.visible)
    },
    handleMaskClick () {
      if (this.maskClose) {
        this.hide()
      }
    }
  }
}
</script>
