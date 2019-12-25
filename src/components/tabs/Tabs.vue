<template >
  <div class="vc-tab"
       ref="tab">
    <div class="vc-tab-active-bg"
         :class="{transition: styles}"
         :style="styles"></div>
    <div class="vc-tab-items">
      <div class="vc-tab-item"
           ref="item"
           v-for="(item,i) in nav"
           :key="i"
           :class="{active: i === index}"
           @click="handleClick(item, i)">
        {{item.txt}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vc-tabs',
  props: {
    // 用来双向绑定的index
    value: {
      type: Number,
      default: 0
    },
    nav: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      typeId: 'map',
      index: this.value,
      styles: null,
      backgroundStyles: null
    }
  },
  computed: {
  },
  watch: {
    value (value) {
      if (this.index !== value) {
        this.index = value
      }
    },
    index () {
      this.setActive()
    }
  },
  mounted () {
    this.setActive()
  },
  methods: {
    handleClick (item, index) {
      this.index = index
      this.$emit('input', index)
      this.$emit('change', item)
    },
    // 动画
    setActive () {
      const node = this.$refs.item[this.index]
      // 激活的节点
      if (node) {
        this.styles = {
          transform: `translateX(${node.offsetLeft}px)`,
          // left: `${node.offsetLeft}px`,    //这两种都可以
          width: `${node.getBoundingClientRect().width}px`
        }
      }
    }
  }
}
</script>
