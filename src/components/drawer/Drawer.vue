<template>
  <div class="vc-confirm-wrap">
    <transition name="background-fade">
      <div class="vc-confirm-background"
           v-show="showFlag"></div>
    </transition>
    <transition :name="transitionPosition">
      <div class="vc-confirm"
           v-show="showFlag"
           @click="hide">
        <div class="vc-confirm-wrapper">
          <div class="vc-confirm-content"
               :style="WidthHeight"
               @click.stop>
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'vc-drawer',
  props: {
    direction: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showFlag: false,
      WidthHeight: null,
      transitionPosition: 'fade-left-right'
    }
  },
  watch: {
    direction (newdirection) {
      this.directionChange(newdirection)
    }
  },
  computed: {
  },
  methods: {
    directionChange (string) {
      if (string === 'left') {
        this.transitionPosition = 'fade-left'
        this.WidthHeight = {
          left: 0,
          top: 0,
          width: `${20}vw`,
          height: `${100}vh`
        }
      } else if (string === 'top') {
        this.transitionPosition = 'fade-top'
        this.WidthHeight = {
          left: 0,
          top: 0,
          width: `${100}vw`,
          height: `${20}vh`
        }
      } else if (string === 'right') {
        this.transitionPosition = 'fade-right'
        this.WidthHeight = {
          right: 0,
          top: 0,
          width: `${20}vw`,
          height: `${100}vh`
        }
      } else if (string === 'bottom') {
        this.transitionPosition = 'fade-bottom'
        this.WidthHeight = {
          right: 0,
          bottom: 0,
          width: `${100}vw`,
          height: `${20}vh`
        }
      }
    },
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    // 点击X关闭
    closeChange () {
      this.showFlag = false
    },
    // 点击取消按钮
    cancelChange () {
      this.showFlag = false
    },
    affirmChange () {
      this.showFlag = false
      this.$emit('confirm', '你点击的确认')
    }
  }
}
</script>
