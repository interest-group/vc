# Button 按钮

基础组件，仅提供针对一些场景使用的不同样式的按钮

## 代码示例

### 基本使用

::: demo button

```html
<template>
  <vc-button>default</vc-button>
  <vc-button type="info">info</vc-button>
  <vc-button type="error">error</vc-button>
  <vc-button type="warning">warning</vc-button>
  <vc-button type="success">success</vc-button>
  <br />
  <br />
  <div style="background-color: #282828; padding: 1em;">
    <vc-button ghost>default</vc-button>
    <vc-button type="info" ghost>info</vc-button>
    <vc-button type="error" ghost>error</vc-button>
    <vc-button type="warning" ghost>warning</vc-button>
    <vc-button type="success" ghost>success</vc-button>
  </div>
</template>
```
:::

### 尺寸

::: demo button

```html
<template>
  <vc-button type="info" size="large">default</vc-button>
  <vc-button type="info">default</vc-button>
  <vc-button size="small">default</vc-button>
  <br />
  <br />
  <vc-button type="error" size="large">error</vc-button>
  <vc-button type="error" size="middle">error</vc-button>
  <vc-button type="error" size="small">error</vc-button>
</template>
```
:::

### 禁用

::: demo button

```html
<template>
  <vc-button>default</vc-button>
  <vc-button type="info">info</vc-button>
  <vc-button type="error">error</vc-button>
  <vc-button type="warning">warning</vc-button>
  <vc-button type="success">success</vc-button>
  <br />
  <br />
  <vc-button disabled>default</vc-button>
  <vc-button type="info" disabled>info</vc-button>
  <vc-button type="error" disabled>error</vc-button>
  <vc-button type="warning" disabled>warning</vc-button>
  <vc-button type="success" disabled>success</vc-button>
  <br />
  <br />
  <div style="background-color: #282828; padding: 1em;">
    <vc-button ghost>default</vc-button>
    <vc-button type="info" ghost>info</vc-button>
    <vc-button type="error" ghost>error</vc-button>
    <vc-button type="warning" ghost>warning</vc-button>
    <vc-button type="success" ghost>success</vc-button>
  </div>
  <br />
  <br />
  <div style="background-color: #282828; padding: 1em;">
    <vc-button ghost disabled>default</vc-button>
    <vc-button type="info" ghost disabled>info</vc-button>
    <vc-button type="error" ghost disabled>error</vc-button>
    <vc-button type="warning" ghost disabled>warning</vc-button>
    <vc-button type="success" ghost disabled>success</vc-button>
  </div>
</template>
```
:::

## API

### Button props

| 属性     | 说明                                                              | 类型    | 默认值  |
| -------- | ----------------------------------------------------------------- | ------- | ------- |
| type     | 按钮类型，可选值为`info`, `warning`, `error`, `success`或者不设置 | String  | -       |
| ghost     | 幽灵按钮，常用于有背景的场景 | Boolean  |  `false`     |
| size     | 按钮大小，可选值为`large`, `middle`, `small`或者不设置            | String  | -       |
| disabled | 设置按钮为禁用状态                                                | Boolean | `false` |
| keyEnter | 设计监听`enter`键盘事件                                                | Boolean | `false` |