# Breadcrumb面包屑

demo

::: demo

```HTML
<template>
  <vc-breadcrumb>
      <vc-breadcrumb-item href="/" to="/">Home</vc-breadcrumb-item>
      <vc-breadcrumb-item href="/component/breadcrumb" to="/component/breadcrumb">Components</vc-breadcrumb-item>
      <vc-breadcrumb-item>Breadcrumb</vc-breadcrumb-item>
  </vc-breadcrumb>
</template>


<script>
export default {
  name:'breadcrumb',
  data(){
    return{
     
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
:::
## API
### Breadcrumb props
| 属性    | 说明     | 类型     |默认值     |
| ------- | -------- |-------- |-------- |
| separator   |   自定义分隔符 | String  Element String | / |
### BreadcrumbItem  props
| 属性    | 说明     | 类型     |默认值     |
| ------- | -------- |-------- |-------- |
| href   |   链接，不传则没有链接 | String  Element String | / |