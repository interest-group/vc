<template>
  <div class="wrapper">
    <v-button @click="show" type="info">自定义</v-button>
    <h1>develop - 开发</h1>
  </div>
</template>

<script>
import page from '@/pages/404.vue'
export default {
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  },
  methods: {
    show () {
      this.$modal({
        header: '使用import的.vue文件',
        content: page,
        footer: (h) => h('div')
      })
    }
  },
  components: {}
}
</script>

<style lang="scss">
</style>
