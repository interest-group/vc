<template>
  <div class="v-popper" v-clickoutside.capture="onClickOutside">
    <div ref="reference" class="v-popper__reference" :class="referenceClass" @click="handleClick"><slot name="reference"></slot></div>
    <transition :name="transition" @before-enter="update()" @after-leave="destroy()">
      <div ref="popper" class="v-popper__popper" :class="popperClass" :style="styles" v-show="currentValue"><slot name="popper"></slot></div>
    </transition>
  </div>
</template>

<script>
import clickoutside from '../../directives/clickoutside'
import { transferIncrease } from '../../utils/transfer'
import { insertAfter } from '../../utils/dom'
import popper from './popper.js'

export default {
  name: 'v-popper',
  mixins: [popper],
  directives: {
    clickoutside
  },
  props: {
    referenceClass: {
      default: ''
    },
    popperClass: {
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    minWidth: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      currentValue: false,
      tIndex: transferIncrease()
    }
  },
  computed: {
    styles () {
      let style = {}
      if (this.width) style.width = `${this.width}px`
      if (this.minWidth) style.minWidth = `${this.minWidth}px`
      if (this.transfer) style['z-index'] = 1060 + this.tIndex
      return style
    }
  },
  watch: {
    value (value) {
      if (this.currentValue !== value) {
        this.currentValue = value
      }
    },
    currentValue (value) {
      if (this.value !== value) {
        this.$emit('input', value)
      }
    }
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    // 点击显示
    handleClick () {
      if (this.disabled) return false
      this.currentValue = true
    },
    // 外部点击事件处理
    onClickOutside (event) {
      if (this.currentValue) {
        if (this.transfer) {
          const popper = this.getPopper()
          if (popper === event.target || popper.contains(event.target)) {
            return false
          }
        }
        this.currentValue = false
      }
    },
    getRefReference () {
      return this.$refs.reference
    },
    getPopper () {
      return this.$refs.popper
    },
    update () {
      if (this.transfer) {
        this.transferEl()
      }
      this.updatePopper()
      this.tIndex = transferIncrease()
    },
    destroy () {
      if (this.transfer) {
        this.resetEl()
      }
      this.destroyPopper()
    },
    // 将节点挂载到body上
    transferEl () {
      const popper = this.getPopper()
      if (popper && popper.parentNode !== document.body) {
        document.body.appendChild(popper)
      }
    },
    // 将节点放回原位置
    resetEl () {
      const reference = this.getRefReference()
      const popper = this.getPopper()
      if (reference && popper && popper.parentNode === document.body) {
        insertAfter(popper, reference)
      }
    }
  }
}
</script>
