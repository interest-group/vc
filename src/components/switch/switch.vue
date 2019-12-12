<template >
  <div :class="['switch', index===0 ? 'background-start' : 'background-end']"
       ref="switch">
    <div class="switch-active-bg"
         :class="{transition: styles}"
         :style="styles"></div>
    <div class="switch-items">
      <div class="switch-item"
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
  name: 'vc-switch',
  props: {
    // 用来双向绑定的index
    value: {
      type: Number,
      default: 0
    },
    nav: {
      type: Array,
      default: () => [{ name: 'map', txt: '地图' }, { name: 'table', txt: '表格' }]
    }
  },
  data () {
    return {
      index: this.value,
      styles: null
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
      this.$emit('change', item) // 向父组件传递事件;
    },
    // 动画
    setActive () {
      this.$refs.item.forEach(el => {
        el.style['color'] = ''
      })
      const node = this.$refs.item[this.index]
      node.style['color'] = `${this.txtColor}`
      // 激活的节点
      if (node) {
        this.styles = {
          left: `${node.offsetLeft}px`,
          width: `${node.getBoundingClientRect().width}px`
        }
      }
    }
  }
}
</script>
