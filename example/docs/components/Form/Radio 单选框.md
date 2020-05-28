# Radio 单选框

Radio 单选框

RadioGroup 单选框组

## 代码示例

### label

文本描述

::: demo demo-radio
```html
<template>
  <v-radio name="radio" :value="true" label="radio"></v-radio>
</template>
```
:::

### disabled

禁用

::: demo demo-radio
```html
<template>
  <v-radio name="radio" disabled :value="true" label="radio"></v-radio>
</template>
```
:::

### radio-group

单选框组

::: demo demo-radio
```html
<template>
  <v-radio-group name="demo-radio" :options="[
    {label: '选项0', name: 'option0'},
    {label: '选项1', name: 'option1'},
    {label: '选项2', name: 'option2'},
    {label: '选项3', name: 'option3'}
  ]"></v-radio-group>
</template>
```
:::


## API

### Radio props

| 属性     | 说明             | 类型     | 默认值  |
| -------- | --------        | ------- | ------- |
| value | 初始值（可以使用`v-model`双向绑定数据）   | Boolean   |  false |
| name | 表单name   | String   |   |
| label | 文本描述 | String |  |
| disabled   | 禁用  | Boolean   | false |

### Radio slots

| 名称           | 说明        | 参数        |
| --------       | --------   | --------   |
| default        | 后置内容    |     |

### Radio events

| 事件名    | 说明     | 返回值     | 
| -------- | -------- | -------   |
| change   | 用户输入事件  | value |


### RadioGroup props

| 属性     | 说明             | 类型     | 默认值  |
| -------- | --------        | ------- | ------- |
| value | 选中radio的name   | String   |   |
| name | 表单name   | String   |   |
| disabled   | 禁用  | Boolean   | false |
| options | 选项（radio的$props） | Array | |

### RadioGroup events

| 事件名    | 说明     | 返回值     | 
| -------- | -------- | -------   |
| change   | 用户输入事件  | value |
