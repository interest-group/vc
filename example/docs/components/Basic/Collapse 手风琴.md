# Collapse手风琴

demo

::: demo

```HTML
<template>
 <vc-collapse :list='list'></vc-collapse>  
</template>

<script>
export default {
  name:'collapse',
  data(){
    return{
      list: [
        { title: '标题一', content: '这里是内容一', flag: false },
        { title: '标题二', content: '这里是内容二', flag: false },
        { title: '标题三', content: '这里是内容三', flag: false },
        { title: '标题四', content: '这里是内容四', flag: false }
      ],
    }
  },
  computed: {

  },
  methods: {
 
  },

}
</script>



```
:::
## API

| 属性    | 说明     | 类型   | 默认值 |
| ------- | -------- | -------- |-------- |
| list   | 传入的内容     | Array |    |

