<template>
  <div class="v-checkbox-group" :name="name">
    <slot>
      <v-checkbox v-for="data in options" :key="data.name" :disabled="disabled" v-bind="data"
                  :value="currentValue.includes(data.name)" @change="handleChange(data.name, $event)"></v-checkbox>
    </slot>
  </div>
</template>

<script>
import VCheckbox from './Checkbox'
export default {
  name: 'v-checkbox-group',
  components: {
    VCheckbox
  },
  props: {
    // checkbox 的 name 集合
    value: {
      type: Array,
      default () {
        return []
      }
    },
    name: {
      type: String
    },
    options: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        this.syncValue()
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    handleChange (name, value) {
      if (value) {
        this.currentValue.push(name)
      } else {
        this.currentValue = this.currentValue.filter(val => name !== val)
      }
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    },
    syncValue () {
      if (this.value.join(',') !== this.currentValue.join(',')) {
        this.currentValue = [...this.value]
      }
    }
  }
}
</script>
