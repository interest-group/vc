# 上传图片

demo

::: demo

```HTML
<template>
  <vc-upload :limit='limit' :img-size="imgSize" @ajaxRequest='ajaxRequest'></vc-upload>
</template>
<template>
   <vc-dropload :maxfile-size="imgSize" @fileImg='fileImg'></vc-dropload>
</template>

<script>
export default {
  name:'upload',
  data(){
    return{
      limit:3,
      imgSize:2*1024*1024,
    }
  },
  computed: {

  },
  methods: {
    ajaxRequest(){
      // console.log('请求开始')
    },
    fileImg(flie){
      // console.log(flie)
    }
  },

}
</script>

<style scoped="" lang="scss">

</style>
```

表格

| 属性    | 说明     | 类型   | 默认值 |
| ------- | -------- | ------ | ------ |
| limit   | 数量     | number | 9      |
| imgSize | 限制大小 | number | 1024   |

Methods
| 方法名 | 说明 |  
| ------- | -------- |
| ajaxRequest | 符合要求后上传 |
