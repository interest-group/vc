<template>
  <div class="v-progress-line" :style="outerStyle">
    <div :class="classes" :style="innerStyle">
      <span class="v-progress-line__text">{{percent}}%</span>
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils/assist'

export default {
  name: 'v-progress-line',
  props: {
    // 进度 0~100
    value: {
      type: Number,
      default: 0
    },
    height: {
      type: [Number, String],
      default: 20
    },
    status: {
      validator: (value) => oneOf(value, ['info', 'success', 'warning', 'error']),
      default: 'info'
    },
    color: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    },
    position: {
      validator: (value) => oneOf(value, ['inner', 'follow', 'none']),
      default: 'inner'
    }
  },
  data () {
    return {
      percent: 0
    }
  },
  computed: {
    classes () {
      return [
        `v-progress-line__percent`,
        `v-progress-line__${this.status}`,
        `v-progress-line__${this.position}`
      ]
    },
    outerStyle () {
      return {
        height: `${this.height}px`,
        lineHeight: `${this.height}px`,
        borderRadius: `${this.height / 2}px`,
        backgroundColor: this.bgColor
      }
    },
    innerStyle () {
      return [
        this.outerStyle,
        {
          width: `${this.percent}%`,
          backgroundColor: this.color
        }
      ]
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
