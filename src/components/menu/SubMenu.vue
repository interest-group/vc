<template>
  <li :class="classes">
    <div class="v-sub-menu__title" @click="handleClick">
      <slot name="title">{{title}}</slot>
      <v-icon class="v-sub-menu__icon" name="arrow-down"></v-icon>
    </div>
    <v-slide-down v-model="active"><slot></slot></v-slide-down>
  </li>
</template>

<script>
import VIcon from '../icon'
import VSlideDown from '../slide-down'
import { findParentComponents, findChildComponents } from '../../utils/findComponents'

export default {
  name: 'v-sub-menu',
  components: { VSlideDown, VIcon },
  props: {
    name: {
      type: [String, Number],
      default: ''
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
      accordion: false,
      active: false
    }
  },
  computed: {
    classes () {
      return [
        'v-sub-menu',
        {
          'v-sub-menu__active': this.active,
          'v-sub-menu__disabled': this.disabled
        }
      ]
    }
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.active = !this.active
        // 检查手风琴模式
        this.handleAccordion()
      } else {
        // 关闭所有子嵌套组件
        this.closeSubMenus()
      }
    },
    handleAccordion () {
      if (this.accordion) {
        findParentComponents(this, ['v-menu', 'v-sub-menu']).forEach(ref => {
          findChildComponents(ref, 'v-sub-menu').forEach(ref => {
            ref.active = ref === this
          })
        })
      }
    },
    closeSubMenus () {
      findChildComponents(this, 'v-sub-menu').forEach(ref => {
        ref.active = false
      })
    }
  }
}
</script>
