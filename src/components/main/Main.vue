<template>
  <main 
  :class="direction ? `vc-is-${direction}` : isHorizontal ? `vc-is-horizontal` : `vc-is-vertical`" 
  class="vc-main" 
  :style="{width:width || '100%', height: height}">
  <slot></slot>
  </main>
</template>

<script>
// import  { checkUserAgent } from '../util/checkUseAgent'

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
   this.checkAgent();
   this.checkVertical();
 },
 methods: {
   checkAgent () {
    // const userArent = checkUserAgent();
    // if(userArent && userArent.hasOwnProperty('browser')){
    //  if(userArent.browser.includes('IE')) {
    //   if(parseInt(userArent.ver) <= 8.0) {
    //     let body = document.getElementsByTagName['body'][0]
    //     let main = document.createElement('main');
    //     body.appendChild(main)
    //     }
    //   }
    // }
   },
   checkVertical () {
    const list = Array.from(this.$children);
    if(list.length) {
      this.isHorizontal = list.some(item => item.width);
    }
   }
 },
}
</script>

<style scoped>
/* @import url('../theme/p-class.css'); */
 </style>

<style scoped>
  .vc-main {
    display: flex;
    flex: 1 1 auto;
    align-self: stretch;
  }
</style>
