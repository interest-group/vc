<template>
  <v-popper transition="v-slide-top" class="v-drop-menu" v-model="visible" :disabled="disabled"
            referenceClass="v-drop-menu__reference" popperClass="v-drop-menu__popper"
            :modifiers="modifiers" :placement="placement" :transfer="transfer" :width="dropWidth">
    <template v-slot:reference>
      <slot>点击触发菜单</slot>
    </template>
    <template v-slot:popper>
      <drop-menu-items :items="items" :invert="invert" @click="handleClick"
                       @iconClick="handleIconClick"></drop-menu-items>
    </template>
  </v-popper>
</template>
<script>
import { oneOf } from '../../utils/assist'
import VPopper from '../popper'
import DropMenuItems from './drop-menu-items.vue'

const modifiers = [
  {
    name: 'offset',
    options: {
      offset: [0, 4]
    }
  }
]

export default {
  name: 'v-drop-menu',
  components: {
    VPopper,
    DropMenuItems
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    // 禁用
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    placement: {
      validator (value) {
        return oneOf(value, ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'])
      },
      default: 'bottom-start'
    },
    transfer: {
      type: Boolean,
      default: false
    },
    dropWidth: {
      type: Number,
      default: 0
    },
    invert: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modifiers,
      visible: false
    }
  },
  watch: {
    visible (value) {
      if (this.value !== value) {
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    value (value) {
      if (this.visible !== value) {
        this.visible = value
      }
    }
  },
  mounted () {
    if (this.value) {
      this.visible = true
    }
  },
  methods: {
    // 事件传递
    handleClick (event, item) {
      if (item.disabled || item.skip) return false
      if (item.click instanceof Function) {
        item.click(event, item)
      }
      this.visible = false
      this.$emit('click', event, item)
    },
    handleIconClick (event, item) {
      if (item.disabled) return false
      this.$emit('iconClick', event, item)
    }
  }
}
</script>
