
<template>
  <div :class="`${prefixCls}-checkbox-group`">
    <Checkbox v-for="(item,index) in data"
              :key="index"
              :value="item.value"
              :label="item.label||item.value"
              :disabled="disabled||item.disabled"
              :class="item.class"
              v-model="groupValue"
              @change="_change">
    </Checkbox>
  </div>
</template>
<script>
import Checkbox from './Checkbox'
// import {prefixCls} from '../prefix'

export default {
  name: 'vc-checkbox-group',
  data () {
    return {
      prefixCls: 'vc',
      groupValue: this.value // 初始选中值
    }
  },
  watch: {
    value (v) {
      this.groupValue = v
    }
  },
  updated () {
  },
  props: {
    data: Array,
    value: Array,
    name: String,
    max: Number,
    min: Number,
    change: Function,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: { Checkbox },
  methods: {
    _change (v) {
      const newLen = this.groupValue.length
      const len = this.value.length
      let isAdd = false
      if (newLen > len) {
        isAdd = true // 表示添加勾选，否则表示取消选择
      }
      // 超出最大或最小值时返回原来的值
      if ((isAdd && len >= this.max) || (!isAdd && len <= this.min)) {
        this.$emit('input', [...this.value])
      } else {
        this.$emit('input', [...this.groupValue])
      }
      this.change && this.change(v)
    },
    select () {
      // 对外提供的全选方法
      // 提取所有value值
      let value = []
      this.data && this.data.forEach(item => {
        if (item.disabled && this.value.indexOf(item.value) === -1) {
          // 禁用且没有勾选的过滤
        } else {
          value.push(item.value)
        }
      })
      this.$emit('input', value)
    },
    clear () {
      // 对外提供的全不选方法
      // console.log('clear')
      // 只提示禁用且已选择的
      let value = []
      this.data && this.data.forEach(item => {
        if (item.disabled && this.value.indexOf(item.value) !== -1) {
          // 禁用且没有勾选的过滤
          value.push(item.value)
        }
      })
      this.$emit('input', value)
    }
  },
  computed: {},
  mounted () {
  },
  filters: {}
}
</script>
