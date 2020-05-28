<template>
  <div class="v-tabs" :class="`v-tabs__${type}`">
    <div class="v-tabs__header">
      <div class="tabs">
        <template v-for="item in tabsList">
          <div ref="tabs" :key="item.name" class="tabs-item" :class="tabsItemClasses(item)"
               @click="handleSelect(item)">{{item.label}}</div>
        </template>
        <div class="tabs-line" :style="lineStyle" v-if="type === 'tabs'"></div>
      </div>
    </div>
    <div class="v-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { oneOf } from '../../utils/assist'
import { findChildComponents } from '../../utils/findComponents'

export default {
  name: 'v-tabs',
  props: {
    value: {
      type: String,
      default: ''
    },
    // 选项卡样式
    type: {
      validator: (value) => oneOf(value, ['card', 'tabs']),
      default: 'tabs'
    },
    // 线条颜色
    lineColor: {
      type: String,
      default: ''
    },
    beforeChange: null
  },
  data () {
    return {
      tabsList: [],
      currentValue: '',
      lineStyle: null,
      wait: false
    }
  },
  computed: {
  },
  watch: {
    value (value) {
      this.setActive(value)
    }
  },
  created () {
    this.children = []
  },
  mounted () {
    this.updateChildren()
    if (this.tabsList.length) {
      this.initActive()
    }
  },
  methods: {
    // 初始化选中值
    initActive () {
      this.currentValue = this.tabsList[0].name
      if (this.value && this.value !== this.currentValue) {
        this.currentValue = this.value
      }
      this.setActive(this.currentValue)
    },
    // 更新子节点
    updateChildren () {
      this.children = findChildComponents(this, 'v-tabs-item')
      this.tabsList = this.children.map(ref => ({ name: ref.name, label: ref.label }))
    },
    // 更新选中
    setActive (value) {
      this.currentValue = value
      this.children.forEach(ref => (ref.visible = ref.name === value))
      if (this.type === 'tabs') {
        this.$nextTick(() => this.updateLine())
      }
    },
    // 更新选中动画
    updateLine () {
      const index = this.tabsList.findIndex(({ name }) => name === this.currentValue)
      const node = this.$refs.tabs[index]
      this.lineStyle = {
        backgroundColor: `${this.lineColor}`,
        width: `${node.offsetWidth - 20}px`,
        transform: `translateX(${node.offsetLeft + 10}px)`
      }
    },
    handleSelect (item) {
      if (item.disabled || this.wait) return
      if (this.beforeChange instanceof Function) {
        this.wait = true
        this.beforeChange(() => {
          this.wait = false
          this.setActive(item.name)
        }, item, this.currentValue)
      } else {
        this.setActive(item.name)
      }
      this.$emit('click', item)
    },
    tabsItemClasses (item) {
      return {
        'tabs-item__active': item.name === this.currentValue,
        'tabs-item__disabled': item.disabled
      }
    }
  }
}
</script>
