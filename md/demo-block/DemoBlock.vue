<template>
  <vc-container class="vc-demo-block">
    <vc-header>
      <div class="demo-header">
        <slot name="source"></slot>
      </div>
    </vc-header>
    <vc-main>
      <!--todo 替换 slide-down 组件-->
      <div class="demo-main" v-show="visible">
        <slot name="highlight"></slot>
      </div>
    </vc-main>
    <vc-footer>
      <div class="demo-footer">
        <!--todo 替换 button / icon 组件-->
        <span class="demo-footer-btn" @click="handleClick">{{text}}</span>
      </div>
    </vc-footer>
  </vc-container>
</template>

<script>
export default {
  name: 'vc-demo-block',
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
.vc-demo-block {
  border-radius: 5px;
  border: 1px solid #eee;
  transition: all 0.5s ease;
  &:hover {
    border-color: transparent;
    box-shadow: 0 2px 7px rgba(0,0,0,.15);
  }
}
.demo{
  &-header{
    padding: 24px 20px;
    position: relative;
    border-bottom: 1px solid #eee;
  }
  &-main{
    border-bottom: 1px solid #eee;
  }
  &-footer{
    text-align: center;
    padding: 10px 0;
    &-btn{
      cursor: pointer;
      &:hover{
        color: #6190e8;
      }
    }
  }
}
</style>
