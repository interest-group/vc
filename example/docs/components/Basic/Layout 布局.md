# Layout 布局


## 组件概述


`Container` : 布局容器组件

`Header` : 顶部组件

`Footer` : 底部组件

`Aside` : 侧边栏组件

`Content` : 内容组件

容器组件采用flex布局，默认主轴为 `flex-direction：column` 垂直方向。

当容器内部有侧边栏组件`Aside`, 那容器组件主轴会变成 `flex-direction：row` 水平方向。

可为容器指定direction属性，强制设置容器组件的主轴方向。


## 代码示例

### 经典布局

典型的页面布局

::: demo demo-layout

```html
<template>
  <v-container>
    <v-header>header</v-header>
    <v-content>content</v-content>
    <v-footer>footer</v-footer>
  </v-container>
</template>
```
:::

::: demo demo-layout

```html
<template>
  <v-container>
    <v-header>header</v-header>
    <v-container>
      <v-aside>aside</v-aside>
      <v-content>content</v-content>
    </v-container>
    <v-footer>footer</v-footer>
  </v-container>
</template>
```
:::

::: demo demo-layout

```html
<template>
  <v-container>
    <v-aside>aside</v-aside>
    <v-container>
      <v-header>header</v-header>
      <v-content>content</v-content>
      <v-footer>footer</v-footer>
    </v-container>
  </v-container>
</template>
```
:::


## API

### Container props

| 属性     | 说明      | 类型     | 默认值  |
| -------- | -------- | ------- | ------- |
| direction    | 主轴方向，可选值为`auto`, `horizontal`, `vertical` | String  | `auto` |

### Aside props

| 属性     | 说明      | 类型     | 默认值  |
| -------- | -------- | ------- | ------- |
| width    | 宽度 | Number/String  | 200 |

### Content props

| 属性     | 说明      | 类型     | 默认值  |
| -------- | -------- | ------- | ------- |
| tag    | 标签 | String  | `div` |
