<template>
  <div 
    class="vc-container" 
    :class="direction ? 
    `vc-is-${direction}` : isHorizontal ? 
    `vc-is-horizontal` : `vc-is-vertical`" 
    :style="{width: width, height: height}">
    <slot></slot>
  </div>  
</template>

<script>
export default {
  name: 'vc-container',
  props: {
    direction: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isHorizontal: false
    }
  },
  created() {},
  mounted() {
    const list = Array.from(this.$children);
    if(list.length) {
      this.isHorizontal = list.some(item => item.width); 
    }
  },
}
</script>
