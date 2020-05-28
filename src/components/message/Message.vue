<template>
  <div class="v-message" :class="`v-message__${type}`">
    <v-icon v-if="type !== 'none'" class="icon" :name="icons[type]"></v-icon>
    <div class="title">{{desc}}</div>
    <v-icon class="close" name="close" @click="handleClose"></v-icon>
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
