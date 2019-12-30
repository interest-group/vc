<template>
  <div :class="contentCls"
       @click="stopDuration">
    <i :class="[`${preCls}-icon`,'iconfont',iconType]"></i>
    <div :class="`${preCls}-desc`"
         v-if="content.desc">{{content.desc}}</div>
  </div>
</template>
<script>
import { prefixCls } from '../../utils/assist'
export default {
  name: 'vc-message-small',
  props: {
    content: {
      type: Object,
      default () {
        return {}
      }
    },
    duration: {
      type: Number,
      default: 1.5
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      preCls: prefixCls('message-content'),
      rate: 0,
      timer: 0,
      closeTime: 0
    }
  },
  computed: {
    iconType () {
      switch (this.content.type) {
        case 'success':
          return 'vc-icon-chenggong'
        case 'warning':
          return 'vc-icon-dkw_jinggao' 
        case 'error':
          return 'vc-icon-cuowu'
        default:
          return 'vc-icon-info'
      }
    },
    contentCls () {
      return [
        this.preCls,
        `${this.preCls}-${this.content.type}`
      ]
    },
    closeIconCls () {
      return {
        [`${this.preCls}-close-icon`]: this.closeTime
      }
    },
    animationTime () {
      return this.duration - 0.6
    }
  },
  methods: {
    handleClose () {
      this.clearTimer()
      this.$emit('close')
    },
    // 启动定时
    startDuration () {
      if (this.duration !== 0) {
        this.closeTime = new Date().getTime() + this.animationTime * 1000
        this.timer = setInterval(() => {
          const nearly = (this.closeTime - new Date().getTime()) / (this.animationTime * 1000)
          this.rate = Math.min(1 - nearly, 1)
          if (this.rate >= 1) {
            this.clearTimer()
            setTimeout(() => {
              this.handleClose()
            }, 600)
          }
        }, 200)
      }
    },
    // 清除定时
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = 0
      }
    },
    // 取消定时
    stopDuration () {
      this.clearTimer()
      this.closeTime = 0
    }
  },
  mounted () {
    this.startDuration()
  },
  beforeDestroy () {
    this.clearTimer()
  }
}
</script>
