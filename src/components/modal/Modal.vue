<template>
  <div class="v-modal__wrapper">
    <transition name="v-fade-in">
      <div class="v-modal__mask" v-if="mask && visible" @click="onMaskClick"></div>
    </transition>
    <transition :name="transition">
      <div class="v-modal" v-if="visible">
        <slot name="header">
          <div class="v-modal__header">
            <div class="title">{{title}}</div>
            <v-icon class="close" name="close" @click="cancel"></v-icon>
          </div>
        </slot>
        <div class="v-modal__body">
          <slot></slot>
        </div>
        <slot name="footer">
          <div class="v-modal__footer">
            <v-button @click="cancel">取消</v-button>
            <v-button type="info" @click="confirm">确定</v-button>
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'v-modal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'v-slide-top'
    },
    title: {
      type: String,
      default: '标题'
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClose: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function,
      default: null
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
    },
    visible (visible) {
      if (this.value !== visible) {
        this.$emit('input', visible)
      }
    }
  },
  mounted () {
    this.visible = this.value
  },
  methods: {
    open () {
      this.visible = true
    },
    close () {
      if (this.visible) {
        this.visible = false
        this.$emit('close')
      }
    },
    confirm (event) {
      this.hide()
      this.$emit('confirm', event)
    },
    cancel (event) {
      this.hide()
      this.$emit('cancel', event)
    },
    hide () {
      if (this.beforeClose instanceof Function) {
        this.beforeClose(() => this.close())
      } else {
        this.close()
      }
    },
    onMaskClick () {
      if (this.maskClose) {
        this.hide()
      }
    }
  }
}
</script>
