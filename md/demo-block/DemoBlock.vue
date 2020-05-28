<template>
  <v-container class="v-demo-block">
    <v-header class="v-demo-block__header">
      <slot name="source"></slot>
    </v-header>
    <v-content>
      <v-slide-down class="v-demo-block__body" :value="visible">
        <slot name="highlight"></slot>
      </v-slide-down>
    </v-content>
    <v-footer class="v-demo-block__footer">
      <v-button type="text" long @click="handleClick">{{text}}</v-button>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'v-demo-block',
  data () {
    return {
      visible: false
    }
  },
  computed: {
    text () {
      return this.visible ? '隐藏代码' : '显示代码'
    }
  },
  methods: {
    handleClick () {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped="" lang="scss">
.v-demo-block {
  border-radius: 5px;
  border: 1px solid #eee;
  transition: all 0.5s ease;
  margin: 20px 0;
  &:hover {
    border-color: transparent;
    box-shadow: 0 2px 7px rgba(0,0,0,.15);
  }
  &__header{
    padding: 24px 20px;
    position: relative;
    border-bottom: 1px solid #eee;
  }
  &__body{
    color: #333333;
    font-size: 13px;
    border-bottom: 1px solid #eee;
  }
}
</style>
