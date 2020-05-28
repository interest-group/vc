# Checkbox 多选框

Checkbox 多选框

CheckboxGroup 多选框组

## 代码示例

### label

文本描述

::: demo demo-checkbox
```html
<template>
  <v-checkbox name="checkbox" :value="true" label="checkbox"></v-checkbox>
</template>
```
:::

### disabled

禁用

::: demo demo-checkbox
```html
<template>
  <v-checkbox name="checkbox" disabled :value="true" label="checkbox"></v-checkbox>
</template>
```
:::

### indeterminate

indeterminate状态，只负责样式控制

::: demo demo-checkbox
```html
<template>
  <v-checkbox name="checkbox" indeterminate :value="true" label="checkbox"></v-checkbox>
</template>
```
:::

### checkbox-group

多选框组

::: demo demo-checkbox
```html
<template>
  <v-checkbox-group name="checkbox-group" :options="[
    {label: '选项0', name: 'option0'},
    {label: '选项1', name: 'option1'},
    {label: '选项2', name: 'option2'},
    {label: '选项3', name: 'option3'}
  ]"></v-checkbox-group>
</template>
```
:::


## API

### Checkbox props

| 属性     | 说明             | 类型     | 默认值  |
| -------- | --------        | ------- | ------- |
| value | 初始值（可以使用`v-model`双向绑定数据）   | Boolean   |  false |
| name | 表单name   | String   |   |
| label | 文本描述 | String |  |
| disabled   | 禁用  | Boolean   | false |
| indeterminate | indeterminate状态，只负责样式控制 | Boolean | false|

### Checkbox slots

| 名称           | 说明        | 参数        |
| --------       | --------   | --------   |
| default        | 后置内容    |     |

### Checkbox events

| 事件名    | 说明     | 返回值     | 
| -------- | -------- | -------   |
| change   | 用户输入事件  | value |


### CheckboxGroup props

| 属性     | 说明             | 类型     | 默认值  |
| -------- | --------        | ------- | ------- |
| value | 选中checkbox的name 集合（可以使用`v-model`双向绑定数据）   | Array   |   |
| name | 表单name   | String   |   |
| disabled   | 禁用  | Boolean   | false |
| options | 选项（checkbox的$props） | Array | |

### CheckboxGroup events

| 事件名    | 说明     | 返回值     | 
| -------- | -------- | -------   |
| change   | 用户输入事件  | value |
