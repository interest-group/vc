# Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 代码示例

### 基本用法

::: demo demo-notice

```html
<template>
  <v-button @click="$message.info('这是一条info消息')" type="info">info</v-button>
  <v-button @click="$message.success('这是一条success消息')" type="success">success</v-button>
  <v-button @click="$message.warning('这是一条warning消息')" type="warning">warning</v-button>
  <v-button @click="$message.error('这是一条error消息')" type="error">error</v-button>
</template>
```
:::

### duration

自动关闭时间

::: demo demo-notice
```html
<template>
  <v-button @click="$message({desc: '不会自动关闭的消息', duration: 0})">非自动关闭消息</v-button>
</template>
```
:::

### API

## 实例调用

- `this.$message(config)`
- `this.$message.info(desc)`
- `this.$message.success(desc)`
- `this.$message.warning(desc)`
- `this.$message.error(desc)`


### Message config


| 参数     | 说明             | 类型       | 默认值  |
| -------- | --------        | -------   | ------- |
| config   | 消息参数，传`String`类型时将转换成 {desc: config} | Object/String   |  |
| config.type | 消息状态，可选值为`info`, `success`, `warning`, `error` | String   | `success` |
| config.desc | 消息描述   | String   |  |
| config.duration | 自动关闭延时，不关闭可以写0   | Number   | 2.5 |

