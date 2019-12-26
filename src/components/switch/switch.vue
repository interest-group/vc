<template>
  <div @click="!disabled && onChange()" :class="switchClasses">
    <span class="vc-switch_text_close" :class="textCloseClasses" v-if="inactiveText">
      <span>{{inactiveText}}</span>
    </span>
    <div class="vc-switch_success" :class="classes" :style="styles"></div>
    <span class="vc-switch_text_open " :class="textOpenClasses" v-if="activeText">
      <span>{{activeText}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vc-switch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    // 关闭时的颜色
    inactiveColor: {
      type: String,
      default: ''
    },
    //  打开时的颜色
    activeColor: {
      type: String,
      default: ''
    },
    // switch宽度
    width: {
      type: Number,
      default: 40
    },
    // 打开时文字描述
    activeText: {
      type: String,
      default: ''
    },
    // 关闭时文字描述
    inactiveText: {
      type: String,
      default: ''
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 改变前的钩子函数
    beforeChange: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      // 钩子是否执行完
      isbeforenFinish: false
    }
  },
  computed: {
    switchClasses () {
      return [
        'vc-switch',
        {
          'vc-switch_disabled': this.disabled
        }
      ]
    },
    isChecked: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('change', val)
      }
    },
    classes () {
      return [
        'vc-switch_input',
        {
          'vc-switch_checked': this.isChecked
        }
      ]
    },
    styles () {
      return {
        backgroundColor: this.isChecked ? this.activeColor : this.inactiveColor,
        width: `${this.width}px`
      }
    },
    // 文字样式
    textCloseClasses () {
      return [
        'vc-switch_text',
        {
          'vc-switch_active': !this.isChecked
        }
      ]
    },
    textOpenClasses () {
      return [
        'vc-switch_text',
        {
          'vc-switch_active': this.isChecked
        }
      ]
    }
  },
  methods: {
    onChange () {
      if (!this.beforeChange) {
        this.isChecked = !this.isChecked
      } else {
        if (this.isbeforenFinish) return
        this.isbeforenFinish = true
        this.beforeChange(() => {
          this.isChecked = !this.isChecked
          this.isbeforenFinish = false
        })
      }
    }
  }
}
</script>
