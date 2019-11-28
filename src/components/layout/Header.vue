<template>
  <header 
    class="vc-header" 
    :style="{width:width || '100%', height}">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'vc-header',
  props: {
   width: {
     type: String,
     default: ''
   },
   height: {
     type: String,
     default : ''
   },
  }
}
</script>
