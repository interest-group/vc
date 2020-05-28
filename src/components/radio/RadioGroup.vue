<template>
  <div class="v-radio-group" :name="name">
    <slot>
      <v-radio v-for="data in options" :key="data.name" :disabled="disabled" v-bind="data"
                  :value="currentValue === data.name" @change="handleChange(data.name)"></v-radio>
    </slot>
  </div>
</template>

<script>
import VRadio from './Radio'
export default {
  name: 'v-radio-group',
  components: {
    VRadio
  },
  props: {
    // radio 的 name
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        this.currentValue = value
        this.$emit('sync', value)
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    handleChange (name) {
      this.currentValue = name
      this.$emit('input', this.currentValue)
      this.$emit('u-change', this.currentValue)
    }
  }
}
</script>
