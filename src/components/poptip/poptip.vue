<template>
  <v-popper class="v-poptip" transition="v-fade-in" referenceClass="v-poptip__reference" popperClass="v-poptip__popper"
          v-model="visible" :modifiers="modifiers" :placement="placement" :transfer="transfer"
          :width="width" :disabled="useHover || disabled"
          @mouseenter.native="handleMouseenter" @mouseleave.native="handleMouseleave">
    <template v-slot:reference><slot></slot></template>
    <template v-slot:popper>
      <div data-popper-arrow></div>
      <slot name="content">{{content}}</slot>
    </template>
  </v-popper>
</template>
<script>
import { debounce } from '../../utils/pipe'
import { oneOf } from '../../utils/assist'
import VPopper from '../popper'

const modifiers = [
  {
    name: 'offset',
    options: {
      offset: [0, 8]
    }
  }
]

export default {
  name: 'v-poptip',
  components: {
    VPopper
  },
  props: {
    trigger: {
      validator (value) {
        return oneOf(value, ['click', 'hover'])
      },
      default: 'click'
    },
    placement: {
      validator (value) {
        return oneOf(value, ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end', 'right-start', 'right', 'right-end'])
      },
      default: 'top'
    },
    transfer: {
      type: Boolean,
      default: false
    },
    content: {
      type: [String, Number],
      default: ''
    },
    width: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false,
      setVisible: debounce((visible) => (this.visible = visible), 100),
      modifiers
    }
  },
  computed: {
    useHover () {
      return this.trigger === 'hover'
    }
  },
  watch: {
    value (value) {
      if (this.visible !== value) {
        this.visible = value
      }
    },
    visible (visible) {
      if (this.value !== visible) {
        this.$emit('input', visible)
      }
    }
  },
  mounted () {
    if (this.value) {
      this.visible = true
    }
  },
  methods: {
    handleMouseenter () {
      if (!this.disabled && this.useHover) {
        this.setVisible(true)
      }
    },
    handleMouseleave () {
      if (this.useHover) {
        this.setVisible(false)
      }
    }
  }
}
</script>
