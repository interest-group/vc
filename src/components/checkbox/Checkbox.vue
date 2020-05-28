<template>
  <div class="v-checkbox-wrap">
    <span :class="classes" @click="handleConfirm" :name="name">
      <checkbox-icon :value="currentValue" :indeterminate="indeterminate" :disabled="disabled"></checkbox-icon>
      <span class="v-checkbox__label" v-if="label">{{label}}</span>
      <slot v-if="$slots.default"></slot>
    </span>
  </div>
</template>

<script>
import CheckboxIcon from './CheckboxIcon'
import mixin from '../../mixins/check'
export default {
  name: 'v-checkbox',
  mixins: [mixin],
  components: {
    CheckboxIcon
  },
  props: {
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      is: 'checkbox'
    }
  }
}
</script>
