import { oneOf } from '../../utils/assist'

export default {
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['info', 'success', 'warning', 'error', 'none'])
      },
      default: 'success'
    },
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2.5
    }
  },
  data () {
    return {
      icons: {
        info: 'info',
        success: 'chenggong',
        warning: 'dkw_jinggao',
        error: 'cuowu'
      },
      timer: 0
    }
  },
  mounted () {
    this.startDuration()
  },
  beforeDestroy () {
    this.removeDuration()
  },
  methods: {
    startDuration () {
      this.removeDuration()
      if (this.duration) {
        this.timer = setTimeout(() => {
          this.timer = 0
          this.handleClose()
        }, this.duration * 1000)
      }
    },
    removeDuration () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = 0
      }
    },
    handleClose () {
      this.$emit('close')
    }
  }
}
