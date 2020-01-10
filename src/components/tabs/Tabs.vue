<template>
  <div class="vc-tabs" :class="tabsClasses">
    <div class="vc-tabs_header" :class="tabsHeaderClasses">
      <div class="vc-tabs_list" :class="tabsListClasses">
        <div v-for="(item, index) in tabsList"
        :key="index"
        :class="navClasses(index, item)"
        @click="!item.disabled && onSelectTab(item, index)"
        ref="tabList">
          {{item.label}}
        </div>
        <div class="vc-tabs_line" :style="lineStyles" v-if="type === 'tabs'"></div>
      </div>
    </div>
    <div class="vc-tabs_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-tabs',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    // 选项卡样式
    type: {
      type: String,
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
      // 底部线条宽度
      lineWidth: 0,
      // 当前活动导航
      currentActive: '',
      // 滚动距离
      lineTransformX: 0,
      // 当前选择值
      activeValue: '',
      temporaryValue: '',
      activeEvent: {},
      isFinish: false
    }
  },
  computed: {
    tabsClasses () {
      return {
        'vc-tabs-card': this.type === 'card'
      }
    },
    tabsHeaderClasses () {
      return {
        'vc-tabs_header_card': this.type === 'card'
      }
    },
    tabsListClasses () {
      return [
        {
          'vc-tabs_list-tabs': this.type === 'tabs',
          'vc-tabs_list-card': this.type === 'card'
        }
      ]
    },
    // 底部线条
    lineStyles () {
      return {
        width: `${this.lineWidth}px`,
        transform: `translateX(${this.lineTransformX}px)`,
        backgroundColor: `${this.lineColor}`
      }
    }
  },
  watch: {
    value (val) {
      this.currentActive = this.tabsList.findIndex(v => v.name === this.value)
    },
    tabsList (val) {
      this.currentActive = val.findIndex(v => v.name === this.value)
      this.showDiv()
    },
    currentActive (val) {
      if (val < 0) return
      this.$nextTick(() => {
        if (val === 0) {
          this.lineWidth = this.$refs.tabList[val].offsetWidth - 20
          this.lineTransformX = this.$refs.tabList[val].offsetLeft
        } else if (val === this.tabsList.length - 1) {
          this.lineWidth = this.$refs.tabList[val].offsetWidth - 20
          this.lineTransformX = this.$refs.tabList[val].offsetLeft + 20
        } else {
          this.lineWidth = this.$refs.tabList[val].offsetWidth - 40
          this.lineTransformX = this.$refs.tabList[val].offsetLeft + 20
        }
        this.activeValue = this.tabsList[val].name
        this.$emit('change', this.activeValue)
        this.$emit('tab-change', this.tabsList[val], this.activeEvent)
        this.showDiv()
      })
    }
  },
  mounted () {
    this.tabsList = this.$children
  },
  methods: {
    navClasses (i, item) {
      return [
        'vc-tabs_list-nav',
        item.disabled ? 'vc-tabs_list-disabled' : 'vc-tabs_list-nodisabled',
        {
          'vc-tabs_list-nav-first': i === 0,
          'vc-tabs_list-nav-last': (this.tabsList.length - 1) === i,
          'vc-tabs_list-nav-isactive': this.currentActive === i
        }
      ]
    },
    // 选择导航
    onSelectTab (item, index) {
      this.temporaryValue = item.name
      if (!this.beforeChange) {
        this.currentActive = index
        this.activeEvent = event || window.event
      } else {
        if (this.isFinish) return
        this.isFinish = true
        this.beforeChange(() => {
          this.currentActive = index
          this.activeEvent = event || window.event
          this.isFinish = false
        }, this.temporaryValue, this.activeValue)
      }
    },
    // 控制显示隐藏
    showDiv () {
      this.$children.map(v => {
        v.show = false
        if (v.name === this.activeValue) {
          v.show = true
        }
      })
    }
  }
}
</script>
