# ProgressCircle 环形进度条

用于显示当前操作进度

## 代码示例

### 基本用法

:::demo demo-progress-circle
```html
<template>
  <v-progress-circle :value="0"></v-progress-circle>
  <v-progress-circle :value="30"></v-progress-circle>
  <v-progress-circle :value="60"></v-progress-circle>
  <v-progress-circle :value="100"></v-progress-circle>
</template>
```
:::

### height

大小

:::demo demo-progress-circle
```html
<template>
  <v-progress-circle :value="20" height="50"></v-progress-circle>
  <v-progress-circle :value="30" height="100"></v-progress-circle>
  <v-progress-circle :value="40" height="150"></v-progress-circle>
</template>
```
:::

### stroke

进度环宽度

:::demo demo-progress-circle
```html
<template>
  <v-progress-circle :value="20" :stroke="6"></v-progress-circle>
  <v-progress-circle :value="30" :stroke="12"></v-progress-circle>
  <v-progress-circle :value="40" :stroke="20"></v-progress-circle>
</template>
```
:::

### linecap

进度环圆角

::: demo demo-progress-circle
```html
<template>
  <v-progress-circle :value="30" :stroke="12" linecap="round"></v-progress-circle>
  <v-progress-circle :value="30" :stroke="12" linecap="square"></v-progress-circle>
</template>
```
:::

### status

状态

:::demo demo-progress-circle
```html
<template>
  <v-progress-circle :value="20" status="info"></v-progress-circle>
  <v-progress-circle :value="30" status="success"></v-progress-circle>
  <v-progress-circle :value="40" status="warning"></v-progress-circle>
  <v-progress-circle :value="50" status="error"></v-progress-circle>
</template>
```
:::

### color & bgColor

自定义颜色

:::demo demo-progress-circle
```html
<template>
  <v-progress-circle :value="20"></v-progress-circle>
  <v-progress-circle :value="30" color="#0F4A88" bg-color="#CDD9F5"></v-progress-circle>
</template>
```
:::


## API

### props

| 属性     | 说明                                                              | 类型    | 默认值  |
| -------- | ----------------------------------------------------------------- | ------- | ------- |
| value     | 进度值，0~100 | Number  | 0       |
| height     | 高度                                   | String/Number  | 50    |
| status     | 进度状态，可选值为`info`, `success`, `warning`, `error`   | String  | `info`   |
| stroke | 进度环宽度                                                | Number | 6 |
| linecap | 进度环圆角，可选值为`square`, `round`   | String | `round` |
| color | 自定义颜色                                                | String |  |
| bg-color | 自定义背景色                                                | String |  |

