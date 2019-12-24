<template>
  <div class="vc-progress">
    <!--线型进度条-->
    <template v-if="type==='line'">
      <div :style="{width: radius ? radius + 'px' : '400px',background: color, height: border ? border + 'px':'15px'}"
          :class="[className, 'vc-progress-line', `vc-progress-${status}`]">
        <span class="vc-progress-bar"
              :style="lineStyle">
          <span class="vc-progress-line-text" v-if="showText && followText">
            <slot>{{percent}}%</slot>
          </span>
        </span>
        <span class="vc-progress-fixed-text"
              v-if="showText && !followText">
              <slot>{{percent}}%</slot>
        </span>
      </div>
    </template>

    <!--圆形进度条-->
    <template v-else-if="type === 'circle'">
      <div v-style.pro="circleStyle"
          :class="[className, 'vc-progress-circle']"
          >
        <span class="vc-progress-circle-text" v-if="showText">
          <slot>{{percent}}%</slot>
        </span>
        <div class="vc-circle-circle"
            v-style.circle="circleStyle"
            :style="circleStyle2">
          <span class="vc-circle-left"
                v-style.left="circleStyle"
                :style="circleRotateStyle"></span>
          <span class="vc-circle-right"
                v-style.right="circleStyle"
                v-if="percent >= 50"></span>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
const barColor = {
  'primary': '#409eff',
  'waring': '#e6a23c',
  'success': '#67c23a',
  'danger': '#f56c6c'
}
export default {
  name: 'vc-progress',
  data () {
    return {
      circleStyle: {// 定义个方便传到指令去
        radius: this.radius,
        border: this.border,
        color: this.color,
        borderColor: this.borderColor ? this.borderColor : barColor[this.status]
      },
      percent: 0
    }
  },
  props: {
    type: {
      type: String,
      default: 'line',
      validator: function (value) {
        return ['line', 'circle'].indexOf(value) !== -1
      }
    },
    className: String,
    // 进度
    value: {
      type: Number,
      default: 0
    },
    // 外半径
    radius: {
      type: Number,
      default: 0
    },
    // 边框
    border: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#ebeef5'
    },
    borderColor: {
      type: String,
      default: ''
    },
    // 动画持续时间，单位毫秒
    duration: {
      type: Number,
      default: 1000
    },
    // 显示进度数字
    showText: {
      type: Boolean,
      default: true
    },
    // 进度数字跟进进度
    followText: {
      type: Boolean,
      default: true
    },
    // 状态
    status: {
      type: String,
      default: 'primary'
    }
  },
  created () {
  },
  components: {},
  methods: {
    _animation () {
      // 这里还是用js控制，css控制不了，因为大于50%后还要处理其他
      let clearTime
      clearTime = setInterval(() => {
        if (this.percent < this.value && this.percent < 100) {
          this.percent++
        } else {
          clearInterval(clearTime)
        }
      }, this.duration / this.value)
    }
  },
  computed: {
    lineStyle () {
      return {
        height: this.border ? this.border + 'px' : '15px',
        width: this.percent + '%',
        background: this.borderColor ? this.borderColor : barColor[this.status],
        transition: `all ${this.duration / 1000}s`,
        lineHeight: this.border ? this.border + 'px' : '15px'
      }
    },
    circleStyle2 () {
      // value大于50%时显示完整，小于50%，显示右半边360/100
      if (this.percent > 50) {
        return {
          clip: 'rect(auto,auto,auto,auto)'
        }
      } else {
        return {
          clip: `rect(0,${this.radius * 2}px,${this.radius * 2}px,${this.radius}px)`
        }
      }
    },
    circleRotateStyle () {
      // 左半圆根据value值旋转即可，360度/100=3.6
      return {
        transform: 'rotate(' + 3.6 * this.percent + 'deg)',
        webkitTransform: 'rotate(' + 3.6 * this.percent + 'deg)'
      }
    }
  },
  mounted () {
    if (this.type === 'circle') {
      this._animation()
    } else if (this.type === 'line') {
      // 这里用css3动画的transition，设置下延时
      setTimeout(() => {
        this.percent = this.value
      }, 10)
    }
  },
  filters: {},
  directives: {
    // 每个都指定宽高等，但每个标签又不太一致，部分共公的，这里用指令，并且是bind形式只调用一次
    // 发现每个都要写style好麻烦
    style: {
      bind (el, binding) {
        let value = binding.value
        let type = binding.modifiers
        let style = el.style
        style.width = value.radius * 2 + 'px'
        style.height = value.radius * 2 + 'px'
        if (type.pro) {
          style.border = `${value.border}px solid ${value.color}`
        } else if (type.circle) {
          style.left = `-${value.border}px`
          style.top = `-${value.border}px`
        } else if (type.left) {
          style.border = `${value.border}px solid ${value.borderColor}`
          style.clip = `rect(0, ${value.radius}px, ${value.radius * 2}px, 0px)`
        } else if (type.right) {
          style.border = `${value.border}px solid ${value.borderColor}`
          style.clip = `rect(0, ${value.radius * 2}px, ${value.radius * 2}px, ${value.radius}px)`
        }
      }
    }
  }
}
</script>
