<template>
  <div class="le-container" :class="direction ? `le-is-${direction}` : isHorizontal ? `le-is-horizontal` : `le-is-vertical`" :style="{width: width, height: height}">
    <slot></slot>
  </div>  
</template>

<script>
export default {
  name: 'leContainer',
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
  created() {
    // console.log(this.$children,'childrennnnnnn',this.$children.length)
  },
  mounted() {
    const list = Array.from(this.$children);
    if(list.length) {
      this.isHorizontal = list.some(item => item.width); 
    }
    // if(list
  },
}
</script>

<style scoped> @import url('../theme/p-class.css'); </style>
<style scoped>
  .le-container {
    display: flex;
  }
  
</style>
