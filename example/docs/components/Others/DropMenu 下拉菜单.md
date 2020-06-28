# drop-menu 下拉菜单

## 代码示例

### base

基本使用

::: demo demo-drop-menu

```html
<template>
  <v-drop-menu :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>菜单</v-button>
  </v-drop-menu>
  <v-drop-menu :items="[
      {label: '选项1', icon: 'circle-checked'},
      {label: '选项2', rightIcon: 'circle-arrow-right'}
    ]" @click="() => {}">
    <v-button>带icon</v-button>
  </v-drop-menu>
  <v-drop-menu :items="[
      {label: '选项1', disabled: true},
      {type: 'line'},
      {label: '选项2', active: true},
      {label: '选项3', items: [{label: '选项3-1'}, {label: '选项3-2'}]}
    ]" @click="() => {}">
    <v-button>菜单组&状态&二级菜单</v-button>
  </v-drop-menu>
</template>
```
:::

### value

外部更改显示状态(可使用双向绑定)

::: demo demo-drop-menu

```html
<template>
  <v-drop-menu value :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>菜单</v-button>
  </v-drop-menu>
</template>
```
:::

### disabled

禁用

::: demo demo-drop-menu

```html
<template>
  <v-drop-menu disabled :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>disabled</v-button>
  </v-drop-menu>
</template>
```
:::

### placement

菜单位置（默认bottom-start）

::: demo demo-drop-menu

```html
<template>
  <v-drop-menu placement="top-start" :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>top-start</v-button>
  </v-drop-menu>
  <v-drop-menu placement="top" :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>top</v-button>
  </v-drop-menu>
  <v-drop-menu placement="top-end" :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>top-end</v-button>
  </v-drop-menu>
  <v-drop-menu placement="bottom-start" :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>bottom-start</v-button>
  </v-drop-menu>
  <v-drop-menu placement="bottom" :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>bottom</v-button>
  </v-drop-menu>
  <v-drop-menu placement="bottom-end" :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>bottom-end</v-button>
  </v-drop-menu>
</template>
```
:::

### transfer

节点挂载到`document.body`上

::: demo demo-drop-menu

```html
<template>
  <v-drop-menu transfer :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>菜单</v-button>
  </v-drop-menu>
</template>
```
:::

### invert

多级菜单更换方向显示

::: demo demo-drop-menu

```html
<template>
  <v-drop-menu invert transfer :items="[{label: '选项1'}, {label: '选项2', items: [
      {label: '选项2-1'}, {label: '选项2-2'}
    ]}]" @click="() => {}">
    <v-button>多级菜单</v-button>
  </v-drop-menu>
</template>
```
:::

### drop-width

下拉宽度

::: demo demo-drop-menu

```html
<template>
  <v-drop-menu :drop-width="200" :items="[{label: '选项1'}, {label: '选项2'}]" @click="() => {}">
    <v-button>菜单</v-button>
  </v-drop-menu>
</template>
```
:::

## API

### props

| 属性     | 说明        | 类型     | 默认值  |
| -------- | --------   | ------- | ------- |
| value    | 显示状态（可以使用`v-model`双向绑定数据） | Boolean  | false |
| items    | 下拉框选项  | Array   |      |
| disabled | 禁用       | Boolean  |  false  |
| placement | 方向，可选值为`top-start`, `top`, `top-end`, `bottom-start`, `bottom`, `bottom-end` | String  |  `bottom-start`  |
| transfer | 节点穿透    | Boolean  |  false  |
| drop-width | 下拉框宽度  | Number  |        |
| invert    | 多级菜单更换方向显示  | Boolean  |  false |


### items[x] props

| 属性     | 说明        | 类型     | 默认值  |
| -------- | --------   | ------- | ------- |
| type     | 分割线，可选值为`line` | String  |     |
| icon     | 前置图标    | String   |      |
| label    | 显示文本    | String   |      |
| rightIcon | 后置图标   | String   |      |
| skip     | 不可点击    | Boolean  |  false  |
| disabled | 禁用        | Boolean  |  false  |
| active   | 激活状态    | Boolean  |  false  |
| className | 自定义类名  | String/Object  |        |


### slot

| 名称      | 说明      |
| --------  | -------- |
| default   | 触发点 |

### events

| 事件名    | 说明     | 返回值     | 
| -------- | -------- | -------   |
| change   | 切换显示状态  | value |
| click    | 点击菜单项  | event, item |
| iconClick    | 点击菜单图标  | event, item |
