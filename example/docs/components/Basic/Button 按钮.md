# Button 按钮

基础组件，仅提供针对一些场景使用的不同样式的按钮

## 代码示例

### type

使用`type`属性定义按钮类型

::: demo button

```html
<template>
  <v-button type="default">default</v-button>
  <v-button type="info">info</v-button>
  <v-button type="error">error</v-button>
  <v-button type="warning">warning</v-button>
  <v-button type="success">success</v-button>
  <v-button type="text">text</v-button>
  <div class="ghost">
    <v-button ghost>default</v-button>
    <v-button type="info" ghost>info</v-button>
    <v-button type="error" ghost>error</v-button>
    <v-button type="warning" ghost>warning</v-button>
    <v-button type="success" ghost>success</v-button>
    <v-button type="text" ghost>text</v-button>
  </div>
</template>
```
:::

### size

使用`size`属性定义按钮大小

::: demo button

```html
<template>
  <v-button type="info" size="small">small</v-button>
  <v-button type="info" size="middle">middle</v-button>
  <v-button type="info" size="large">large</v-button>
</template>
```
:::

### disabled

禁用

::: demo button

```html
<template>
  <v-button>default</v-button>
  <v-button type="info">info</v-button>
  <v-button type="error">error</v-button>
  <v-button type="warning">warning</v-button>
  <v-button type="success">success</v-button>
  <v-button type="text">text</v-button>
  <div class="block">
    <v-button disabled>default</v-button>
    <v-button type="info" disabled>info</v-button>
    <v-button type="error" disabled>error</v-button>
    <v-button type="warning" disabled>warning</v-button>
    <v-button type="success" disabled>success</v-button>
    <v-button type="text" disabled>text</v-button>
  </div>
  <div class="ghost">
    <v-button ghost>default</v-button>
    <v-button ghost type="info">info</v-button>
    <v-button ghost type="error">error</v-button>
    <v-button ghost type="warning">warning</v-button>
    <v-button ghost type="success">success</v-button>
    <v-button ghost type="text">text</v-button>
    <div class="block">
      <v-button ghost disabled>default</v-button>
      <v-button ghost type="info" disabled>info</v-button>
      <v-button ghost type="error" disabled>error</v-button>
      <v-button ghost type="warning" disabled>warning</v-button>
      <v-button ghost type="success" disabled>success</v-button>
      <v-button ghost type="text" disabled>text</v-button>
    </div>
  </div>
</template>
```
:::

### icon & suffix-icon

使用`icon`属性定义前置图标

使用`suffix-icon`属性定义按钮后置图标

::: demo button

```html
<template>
  <v-button type="info" icon="search">search</v-button>
  <v-button type="info" suffix-icon="Rightarrow">jump</v-button>
</template>
```
:::

### loading

加载中

::: demo button

```html
<template>
  <v-button type="info" loading>loading</v-button>
</template>
```
:::

### long

长按钮

::: demo button

```html
<template>
  <v-button type="info" long>长按钮</v-button>
</template>
```
:::

## API

### Button props

| 属性     | 说明                                                              | 类型    | 默认值  |
| -------- | ----------------------------------------------------------------- | ------- | ------- |
| type     | 按钮类型，可选值为`default`, `info`, `success`, `warning`, `error`, `text` | String  | `default`       |
| size     | 按钮大小，可选值为`large`, `middle`, `small`           | String  | `middle`      |
| ghost     | 幽灵按钮，常用于有背景的场景                                      | Boolean  | false    |
| disabled | 设置按钮为禁用状态                                                | Boolean | false |
| icon | 前置图标                                                | String |  |
| suffix-icon | 后置图标                                                | String |  |
| loading | 设置加载状态                             | Boolean | false |
| key-enter | 设置监听`enter`键盘事件                               | Boolean | false |
