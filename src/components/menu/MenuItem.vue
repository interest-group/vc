<template>
  <a v-if="to" :href="href" :target="target" :class="classes" @click="handleClick"><slot></slot></a>
  <li v-else="" :class="classes"><slot></slot></li>
</template>

<script>
import { oneOf, bubbling } from '../../utils/assist'
export default {
  name: 'vc-menu-item',
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    to: {
      type: [Object, String]
    },
    tag: {
      type: String,
      default: 'a'
    },
    replace: {
      type: Boolean,
      default: false
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
      active: false
    }
  },
  computed: {
    href () {
      return typeof this.to === 'string' ? this.to : null
    },
    classes () {
      return [
        'vc-menu-item',
        {
          'vc-menu-item-active': this.active,
          'vc-menu-item-disabled': this.disabled
        }
      ]
    }
  },
  mounted () {
    this.$on('update-active', (name) => {
      this.active = this.name === name
    })
  },
  methods: {
    handleClick (event) {
      // 禁用
      if (this.disabled) return event.preventDefault()
      // _blank 原生事件
      if (this.target === '_blank') return
      event.preventDefault()
      this.handleJump(event)
    },
    handleJump (event) {
      if (event.ctrlKey || event.metaKey) {
        window.open(this.to)
      } else if (this.$router) {
        this.replace ? this.$router.replace(this.to) : this.$router.push(this.to)
      } else {
        window.location.href = this.to
      }
      this.active = true
      bubbling(this, 'vc-menu', 'menu-item-active', this.name)
    }
  }
}
</script>
