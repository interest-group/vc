<template>
  <li :class="classes">
    <div class="vc-sub-menu-title" @click="handleClick">
      <slot name="title">{{title}}</slot>
      <Icon class="vc-sub-menu-icon" name="arrow-down2"></Icon>
    </div>
    <SlideDown v-model="active"><slot></slot></SlideDown>
  </li>
</template>

<script>
import Icon from '../icon'
import SlideDown from '../slide-down'
import { bubbling } from '../../utils/assist'
export default {
  name: 'vc-sub-menu',
  components: { SlideDown, Icon },
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return [
        'vc-sub-menu',
        {
          'vc-sub-menu-active': this.active,
          'vc-sub-menu-disabled': this.disabled
        }
      ]
    }
  },
  mounted () {
    this.$on('update-active', (names) => {
      this.active = names.includes(this.name)
    })
  },
  methods: {
    handleClick (event) {
      if (this.disabled) return
      this.active = !this.active
      bubbling(this, 'vc-menu', 'sub-menu-active', this.name, this.active)
    }
  }
}
</script>
