<template>
  <transition name="opacity">
    <div class="vc-modal__wrapper" v-if="isModal">
      <div class="vc-modal__mask" v-if="mask" @click="onMaskClick"></div>
      <div class="vc-modal" :style="{width: width}">
        <div class="vc-modal__header" v-if="!hideHeader">
          <slot name="header">
            <div class="vc-modal__title">{{title}}</div>
            <div class="vc-modal__close-icon" @click="hide">
              <vc-icon name="close"></vc-icon>
            </div>
          </slot>
        </div>
        <div class="vc-modal__body"><slot>内容(⊙︿⊙)...</slot></div>
        <div class="vc-modal__footer" v-if="!hideFooter">
          <slot>
            <vc-button @click="hide">取消</vc-button>
            <vc-button type="info" @click="hide">确定</vc-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'vc-modal',
  props: {
    value: Boolean,
    width: {
      type: String,
      default: '460px'
    },
    title: {
      type: String,
      default: '标题'
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeByMask: {
      type: Boolean,
      default: true
    },
    closeIcon: {
      type: Boolean,
      default: true
    },
    beforeClose: Function,
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value (value) {
      this.isModal = value
    }
  },
  data () {
    return {
      isModal: this.value
    }
  },
  methods: {
    onMaskClick () {
      if (this.closeByMask) this.hide()
    },
    open () {
      this.isModal = true
    },
    close () {
      this.isModal = false
      this.$emit('input', this.isModal)
      this.$emit('change', this.isModal)
    },
    hide () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.close)
      } else {
        this.close()
      }
    }
  }
}
</script>
