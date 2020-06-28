# Poptip 气泡提示

## 代码示例

### trigger

触发方式

::: demo demo-poptip
```html
<template>
  <v-poptip content="提示内容" trigger="click">
    <v-button>点击提示</v-button>
  </v-poptip>
  <v-poptip content="提示内容" trigger="hover">
    <v-button>hover提示</v-button>
  </v-poptip>
</template>
```
:::

### placement

触发位置（默认top）

::: demo demo-poptip
```html
<template>
  <div class="placement">
    <div class="around">
      <v-poptip content="提示内容" placement="top-start">
        <v-button>top-start</v-button>
      </v-poptip>
      <v-poptip content="提示内容" placement="top">
        <v-button>top</v-button>
      </v-poptip>
      <v-poptip content="提示内容" placement="top-end">
        <v-button>top-end</v-button>
      </v-poptip>
    </div>
    <div class="between">
      <v-poptip content="提示内容" placement="left-start">
        <v-button>left-start</v-button>
      </v-poptip>
      <v-poptip content="提示内容" placement="right-start">
        <v-button>right-start</v-button>
      </v-poptip>
    </div>
    <div class="between">
      <v-poptip content="提示内容" placement="left">
        <v-button>left</v-button>
      </v-poptip>
      <v-poptip content="提示内容" placement="right">
        <v-button>right</v-button>
      </v-poptip>
    </div>
    <div class="between">
      <v-poptip content="提示内容" placement="left-end">
        <v-button>left-end</v-button>
      </v-poptip>
      <v-poptip content="提示内容" placement="right-end">
        <v-button>right-end</v-button>
      </v-poptip>
    </div>
    <div class="around">
      <v-poptip content="提示内容" placement="bottom-start">
        <v-button>bottom-start</v-button>
      </v-poptip>
      <v-poptip content="提示内容" placement="bottom">
        <v-button>bottom</v-button>
      </v-poptip>
      <v-poptip content="提示内容" placement="bottom-end">
        <v-button>bottom-end</v-button>
      </v-poptip>
    </div>
  </div>
</template>
```
:::

### content & slot:content

提示内容

::: demo demo-poptip
```html
<template>
  <v-poptip content="提示内容">
    <v-button>content</v-button>
  </v-poptip>
  <v-poptip>
    <v-button>slot:content</v-button>
    <template v-slot:content>
      <v-button long>slot:提示内容</v-button>
    </template>
  </v-poptip>
</template>
```
:::

### value

外部更改显示状态(可使用双向绑定)

::: demo demo-poptip
```html
<template>
  <v-poptip content="提示内容" value>
    <v-button>value</v-button>
  </v-poptip>
</template>
```
:::

### transfer

节点挂载到`document.body`上

::: demo demo-poptip
```html
<template>
  <v-poptip content="提示内容" transfer>
    <v-button>transfer</v-button>
  </v-poptip>
</template>
```
:::

### width

提示宽度

::: demo demo-poptip
```html
<template>
  <v-poptip content="提示内容" placement="top-start" width="400">
    <v-button>width400</v-button>
  </v-poptip>
</template>
```
:::

### disabled

禁用

::: demo demo-poptip
```html
<template>
  <v-poptip content="提示内容" disabled>
    <v-button>disabled</v-button>
  </v-poptip>
</template>
```
:::

## API

### props

| 属性     | 说明             | 类型     | 默认值  |
| -------- | --------        | ------- | ------- |
| value | 显示状态（可以使用`v-model`双向绑定数据）   | Boolean   | false  |
| trigger | 触发方式，可选值为`click`, `hover` | String | `click` |
| placement | 触发位置，可选值为`top-start`, `top`, `top-end`, `bottom-start`, `bottom`, `bottom-end`, `left-start`, `left`, `left-end`, `right-start`, `right`, `right-end` | String  | `top` |
| content     | 提示内容   | String |        |
| transfer | 节点穿透   | Boolean   |  false    |
| width | 提示框宽度   | Number   |   |
| disabled   | 禁用  | Boolean   | false |

### slot

| 名称      | 说明      |
| --------  | -------- |
| default   | 触发点 |
| content   | 提示内容 |
