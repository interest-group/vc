<template>
  <div :class="classes" @click="handleConfirm" :name="name">
    <div class="v-switch-point"></div>
  </div>
</template>

<script>
import mixin from '../../mixins/check'
export default {
  name: 'v-switch',
  mixins: [mixin],
  data () {
    return {
      is: 'switch'
    }
  }
}
</script>
