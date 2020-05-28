<template>
  <div class="v-notice" :class="`v-notice__${type}`">
    <div class="v-notice__header">
      <v-icon v-if="type !== 'none'" class="icon" :name="icons[type]"></v-icon>
      <div class="title">{{title}}</div>
      <v-icon class="close" name="close" @click="handleClose"></v-icon>
    </div>
    <div class="v-notice__desc" v-if="desc">{{desc}}</div>
  </div>
</template>
<script>
import VIcon from '../icon'
import mixin from './mixin'
export default {
  mixins: [mixin],
  components: {
    VIcon
  }
}
</script>
