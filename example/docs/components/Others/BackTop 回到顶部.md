# BackTop回到顶部

demo

::: demo

```HTML
<template>
  <vc-backtop :target="node"></vc-backtop>
</template>


<script>
export default {
  name:'backtop',
  data(){
    return{
      node:null,
    }
  },
  computed: {
    
  },
  mounted(){
    let parentNode = document.querySelector('.component-page__body')
    this.node =parentNode
  },
  methods: {

  },

}
</script>

```
:::
## API

| 属性    | 说明     |
| ------- | -------- |
| target   |   父节点 可以通过ref拿到  | 



