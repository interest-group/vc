# 回到顶部

demo

::: demo

```HTML
<template>
  <vc-switch :nav='list'></vc-switch>
</template>


<script>
export default {
  data(){
    return{
     list:[{ name: 'map', txt: '地图' }, { name: 'table', txt: '表格' }]
    }
  },
  computed: {
    
  },
  mounted(){
   
  },
  methods: {

  },

}
</script>


```

表格

| 属性    | 说明     | 类型   | 默认值 |
| ------- | -------- | -------- |-------- |
| nav   |   只能有2个 |  Array |          |
| value   |   初始高亮为  | Number |     |

Methods
| 方法名 | 说明 |  
| ------- | -------- |
| input | 点击的index |
| change | 点击的item |


