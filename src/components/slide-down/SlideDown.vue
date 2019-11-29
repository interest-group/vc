<template>
  <transition name="vc-slide-down" @before-enter="beforeEnter" @before-leave="beforeLeave"
              @after-enter="clear" @after-leave="clear">
    <div v-show="value">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'vc-slide-down',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    beforeEnter (el) {
      el.style.display = 'block'
      this.setHeight(el)
      el.style.display = ''
    },
    beforeLeave (el) {
      this.setHeight(el)
    },
    setHeight (el) {
      el.style.height = `${el.getBoundingClientRect().height}px`
    },
    clear (el) {
      el.style.height = ''
    }
  },
  components: {}
}
</script>
