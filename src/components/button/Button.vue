<template>
  <button :class="cls" :disabled=" disabled ? 'disabled' : false" @click="$emit('click')"><slot></slot></button>
</template>

<script>
export default {
  name: 'vc-button',
  props: {
    type: {
      type: String,
      validator: (value) => {
        if (!value) return true
        return ~['info', 'success', 'warning', 'error'].indexOf(value)
      }
    },
    size: {
      type: String,
      validator: (value) => {
        if (!value) return true
        return ~['large', 'middle', 'small'].indexOf(value)
      },
      default: 'middle'
    },
    disabled: Boolean
  },
  data () {
    return {
      prefixBtn: 'vc-btn'
    }
  },
  computed: {
    cls () {
      return [
        this.prefixBtn,
        this.type ? `${this.prefixBtn}__${this.type}` : '',
        `${this.prefixBtn}__${this.size}`,
        this.disabled ? `${this.prefixBtn}__disabled` : ''
      ]
    }
  }
}
</script>
