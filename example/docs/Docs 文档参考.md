# markdown样式

以下为组件文档写法的一些示例：

## demo

::: demo
```HTML
<template>
  <div class="test" :style="styles" @click="handleClick">{{test}}</div>
</template>

<script>
export default {
  name: 'test',
  props: {
    test: {
      type: String,
      default: '语法高亮'
    },
    size: {
      type: Number,
      default: 14
    }
  },
  computed: {
    styles () {
      const styles = {}
      if (this.size) {
        styles.fontSize = `${this.size}px`
      }
      return styles
    }
  },
  methods: {
    handleClick (event) {
      // 打印事件
      console.log(event)
    }
  }
}
</script>

<style scoped="" lang="scss">
.test {
  cursor: pointer;
  display: inline-block;
}
</style>
```
:::

## tip & warning

::: tip
这是一条提示。。。
:::

::: warning
这是一条警告。。。
:::

## 表格

|属性|说明|类型|默认值|
|-|-|-|-|
|width|宽度|number\|String|-|
|height|高度|number\|String|-|