<template>
  <li :class="classes">
    <div class="v-sub-menu__title" @click="handleClick">
      <slot name="title">{{title}}</slot>
      <u-icon class="v-sub-menu__icon" type="chevron-bottom"></u-icon>
    </div>
    <u-slide-down v-model="active"><slot></slot></u-slide-down>
  </li>
</template>

<script>
import UIcon from '../icon'
import USlideDown from '../slide-down'
import { findParentComponents, findChildComponents } from '../../utils/findComponents'

export default {
  name: 'u-sub-menu',
  components: { USlideDown, UIcon },
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
