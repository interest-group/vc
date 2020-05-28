# switch 开关

## 代码示例

### 基本使用


::: demo demo-switch
```html
<template>
  <v-switch name="switch" :value="true"></v-switch>
</template>
```
:::

### disabled

禁用

::: demo demo-switch
```html
<template>
  <v-switch name="switch" disabled :value="true"></v-switch>
</template>
```
:::


## API switch

### props

| 属性     | 说明             | 类型     | 默认值  |
| -------- | --------        | ------- | ------- |
| value | 初始值（可以使用`v-model`双向绑定数据）   | Boolean   |  false |
| name | 表单name   | String   |   |
| disabled   | 禁用  | Boolean   | false |


### events

| 事件名    | 说明     | 返回值     | 
| -------- | -------- | -------   |
| change   | 用户输入事件  | value |

