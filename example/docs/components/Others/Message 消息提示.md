# Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 代码示例

### 不同状态

::: demo Message

```html
<template>
  <div>
    <vc-button  @click="success" type="info">成功</vc-button>
    <vc-button  @click="warning" type="info">警告</vc-button>
    <vc-button  @click="error" type="info">错误</vc-button>
    <vc-button  @click="info" type="info">消息</vc-button>
  </div>
</template>

<script>
import Message from '../../../../src/components/message'
export default {
  data () {
    return {
    }
  },
  methods: {
    success () {
      const text =  {
        desc: '这是一条成功信息，成功信息n秒后自动清除。'
      } 
      Message.success(text)
    },
    warning() {
      const text = {
        desc: '这是一条警告信息，成功信息n秒后自动清除。'
      } 
      Message.warning(text)
    },
    error() {
      const text =  {
        desc: '这是一条警告信息，成功信息n秒后自动清除。'
      } 
      Message.error(text)
    },
    info() {
      const text =  {
        desc: '这是一条警告信息，成功信息n秒后自动清除。'
      } 
      Message.info(text)
    }

  }
}
</script>
<style>
  .vc-btn{
    margin-right:10px;
  }
</style>
```
:::
### API
* 通过直接调用以下方法来使用组件

`Message.success(text)`
  
`Message.warning(text)`

`Message.error(text)`

`Message.info(text)`

::: demo modal

```html
```
:::


  
  
  
### Message Props

| 属性          | 说明                                               | 类型    | 默认值  |
| ------------- | -------------------------------------------------- | ------- | ------- |
| desc         | 传入的内容                                          | String |          |





