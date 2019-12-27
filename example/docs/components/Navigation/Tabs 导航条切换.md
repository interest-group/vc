# Tab 导航条切换

demo

::: demo

```HTML
<template>
 <vc-tabs :nav="nav" :value='num'></vc-tabs>
</template>


<script>
export default {
  name:'tabs',
  data(){
    return{
      num: 0,
      nav: [
        { value: 0, txt: '山东' },
        {value: 1, txt: '北京' },
        { value: 2, txt: '武汉' },
        { value: 3, txt: '杭州' }
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

| 属性 | 说明       | 类型  | 默认值 |
| ---- | ---------- | ----- | ------ |
| value | 高亮下标 | Number |     0   |

### Methods
|方法名|说明|
|-|-|-|
|input         |点击的下标 |
|change          | 点击的Item |
