<template>
  <label :class="{[prefixCls+'-checkbox']:true,'checked':checkedCls,'disabled':disabled}">
    <input type="checkbox"
           :disabled="disabled"
           v-model="checked"
           :value="value"
           @change="_change">
    <span :class="`${prefixCls}-checkbox-inner`"></span>
    <span :class="`${prefixCls}-checkbox-text`"
          v-if="label"
          v-text="label"></span>
    <span :class="`${prefixCls}-checkbox-text`"
          v-else>
      <slot></slot>
    </span>
  </label>
</template>
<script>
import emitter from './emitter'

export default {
  name: 'vc-checkbox',
  mixins: [emitter],
  data () {
    return {
      prefixCls: 'vc',
      checked: this.modelValue
    }
  },
  watch: {
    modelValue () {
      this.checked = this.modelValue
    }
  },
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    modelValue: {},
    value: null,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  methods: {
    _change (e) {
      this.$emit('change', this.checked)
      if (this.validateEvent) {
        this.dispatch('formItem', `${this.prefixCls}.form.change`, [this.checked, e])
      }
    }
  },
  computed: {
    checkedCls () {
      // 当value=v-model或v-model中包含了value值时为true
      if (typeof this.modelValue === 'object') {
        return this.modelValue.indexOf(this.value) !== -1
      } else {
        // modelValue值为true为勾选状态
        return !!this.modelValue
      }
    }
  },
  mounted () {
  },
  filters: {}
}
</script>
