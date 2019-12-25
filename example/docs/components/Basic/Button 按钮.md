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
  <vc-button disabled>default</vc-button>
  <vc-button type="info">info</vc-button>
  <vc-button type="info" disabled>info</vc-button>
  <vc-button type="error">error</vc-button>
  <vc-button type="error" disabled>error</vc-button>
  <vc-button type="warning">warning</vc-button>
  <vc-button type="warning" disabled>warning</vc-button>
  <vc-button type="success">success</vc-button>
  <vc-button type="success" disabled>success</vc-button>
</template>
```
:::

## API

### Button props

| 属性     | 说明                                                              | 类型    | 默认值  |
| -------- | ----------------------------------------------------------------- | ------- | ------- |
| type     | 按钮类型，可选值为`info`, `warning`, `error`, `success`或者不设置 | String  | -       |
| size     | 按钮大小，可选值为`large`, `middle`, `small`或者不设置            | String  | -       |
| disabled | 设置按钮为禁用状态                                                | Boolean | `false` |