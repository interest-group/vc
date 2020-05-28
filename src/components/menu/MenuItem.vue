<template>
  <router-link :to="to" v-slot="{ href, navigate, isActive }">
    <component :is="tag" :href="href" class="v-menu-item" :target="target"
               :class="{'v-menu-item__active': isActive, 'v-menu-item__disabled': disabled}"
               @click="handleClick($event, navigate)">
      <slot></slot>
    </component>
  </router-link>
</template>

<script>
import { oneOf } from '../../utils/assist'

export default {
  name: 'v-menu-item',
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    to: {
      default: '#'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      validator (value) {
        return oneOf(value, ['_blank', '_self', '_parent', '_top'])
      },
      default: '_self'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick (event, navigate) {
      if (!this.disabled) {
        navigate(event)
      }
    }
  }
}
</script>
