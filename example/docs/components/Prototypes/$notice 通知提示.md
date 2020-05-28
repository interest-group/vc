# Notice 通知提示

悬浮出现在页面角落，显示全局的通知提醒消息。

## 代码示例

### 基本用法

::: demo demo-notice

```html
<template>
  <v-button @click="$notice.info('这是一条info通知')" type="info">info</v-button>
  <v-button @click="$notice.success('这是一条success通知')" type="success">success</v-button>
  <v-button @click="$notice.warning('这是一条warning通知')" type="warning">warning</v-button>
  <v-button @click="$notice.error('这是一条error通知')" type="error">error</v-button>
</template>
```
:::

### 更多属性

::: demo demo-notice
```html
<template>
  <v-button @click="$notice({
    type: 'success',
    duration: 25,
    title: '长文本通知',
    desc: `描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本
            描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本
            描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本`
  })">长文本消息</v-button>
</template>
```
:::

### duration

自动关闭时间

::: demo demo-button
```html
<template>
  <v-button @click="$notice({title: '不会自动关闭的通知', duration: 0})">非自动关闭通知</v-button>
</template>
```
:::

### API

## 实例调用

- `this.$notice(config)`
- `this.$notice.info(desc)`
- `this.$notice.success(desc)`
- `this.$notice.warning(desc)`
- `this.$notice.error(desc)`


### Notice config


| 参数     | 说明             | 类型       | 默认值  |
| -------- | --------        | -------   | ------- |
| config   | 通知参数，传`String`类型时将转换成 {desc: config} | Object/String   |  |
| config.type | 通知状态，可选值为`info`, `success`, `warning`, `error` | String   | `success` |
| config.title | 通知标题   | String   |  |
| config.desc | 通知描述   | String   |  |
| config.duration | 自动关闭延时，不关闭可以写0   | Number   | 2.5 |

