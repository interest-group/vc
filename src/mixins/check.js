export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      is: 'checkbox',
      currentValue: this.value
    }
  },
  computed: {
    classes () {
      return [
        `v-${this.is}`,
        {
          [`v-${this.is}__disabled`]: this.disabled,
          [`v-${this.is}__active`]: this.currentValue
        }
      ]
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        this.setValue(value)
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    handleConfirm () {
      if (this.disabled) return false
      const value = !this.currentValue
      this.setValue(value)
      this.$emit('change', value)
    },
    setValue (value) {
      if (this.currentValue !== value) {
        this.currentValue = value
      }
      if (this.value !== value) {
        this.$emit('input', value)
      }
    }
  }
}
