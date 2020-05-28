<template>
  <div :style="styles" class="v-progress-circle">
    <svg viewBox="0 0 100 100">
      <path class="v-progress-circle__bg" :style="{stroke: bgColor}" :d="pathString" :stroke-width="stroke" :fill-opacity="0" />
      <path :class="`v-progress-circle__${status}`" :d="pathString" :stroke-linecap="linecap" :stroke-width="stroke"
            fill-opacity="0" :style="pathStyle" />
    </svg>
    <div class="v-progress-circle__inner">
      <slot>{{percent}}%</slot>
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils/assist'

export default {
  name: 'v-progress-circle',
  props: {
    // 进度 0~100
    value: {
      type: Number,
      default: 0
    },
    height: {
      type: [Number, String],
      default: 50
    },
    status: {
      validator: (value) => oneOf(value, ['info', 'success', 'warning', 'error']),
      default: 'info'
    },
    stroke: {
      type: Number,
      default: 6
    },
    linecap: {
      validator (value) {
        return oneOf(value, ['square', 'round'])
      },
      default: 'round'
    },
    color: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      percent: 0
    }
  },
  computed: {
    styles () {
      return {
        width: `${this.height}px`,
        height: `${this.height}px`
      }
    },
    radius () {
      return 50 - this.stroke / 2
    },
    len () {
      return Math.PI * 2 * this.radius
    },
    pathString () {
      return `M 50,50 m 0,-${this.radius}
        a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
        a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`
    },
    pathStyle () {
      return {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${((1 - this.percent / 100) * this.len)}px`,
        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease',
        stroke: this.color
      }
    }
  },
  watch: {
    value () {
      this.setValue()
    }
  },
  mounted () {
    setTimeout(() => this.setValue(), 20)
  },
  methods: {
    setValue () {
      this.percent = this.value
    }
  }
}
</script>
