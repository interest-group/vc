<template>
  <main 
  :class="direction ? `vc-is-${direction}` : isHorizontal ? `vc-is-horizontal` : `vc-is-vertical`" 
  class="vc-main" 
  :style="{width:width || '100%', height}">
  <slot></slot>
  </main>
</template>

<script>

export default {
 name: 'vc-main' ,
 props: {
   width: {
     type: String,
     default: ''
   },
   height: {
     type: String,
     default : ''
   },
   direction: {
     type: String,
     default: ''
   }
 },
 data() {
   return {
     isHorizontal: false
   }
 },
 mounted() {
   this.checkVertical();
 },
 methods: {
   checkVertical () {
    const list = Array.from(this.$children);
    if(list.length) {
      this.isHorizontal = list.some(item => item.width);
    }
   }
 },
}
</script>
