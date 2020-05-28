<template>
  <div class="v-scroll">
    <div class="gm-scrollbar -vertical">
      <div class="thumb"></div>
    </div>
    <div class="gm-scrollbar -horizontal">
      <div class="thumb"></div>
    </div>
    <div class="gm-scroll-view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import GeminiScrollbar from 'gemini-scrollbar'

export default {
  name: 'v-scrollbar',
  props: {
    autoshow: {
      type: Boolean,
      default: false
    },
    forceGemini: {
      type: Boolean,
      default: false
    },
    minThumbSize: {
      type: Number,
      default: 20
    }
  },
  mounted () {
    this.create()
  },
  updated () {
    this.update()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    create () {
      this.scrollbar = new GeminiScrollbar({
        element: this.$el,
        createElements: false,
        onResize: () => this.$emit('resize'),
        ...this.$props
      })
      this.scrollbar.create()
      this.$emit('ready', this.scrollbar)
    },
    update () {
      this.scrollbar ? this.scrollbar.update() : this.create()
    },
    destroy () {
      if (this.scrollbar) {
        this.scrollbar.destroy()
        this.scrollbar = null
      }
    }
  }
}
</script>
