# Layout 布局


## 组件概述


`<v-container></v-container>` : 布局容器组件

`<v-main></v-main>` : 内容容器组件

`<v-header></v-header>` : 顶部组件

`<v-footer></v-footer>` : 底部组件

`<v-aside></v-aside>` : 侧边栏组件

`<v-article></v-article>` : 内容组件

`<v-nav></v-nav>` : 导航组件

两个容器组件 `<v-container></v-container><v-main></v-main>` , 其余都是嵌套的子组件。

容器组件采用flex布局，默认主轴为 `flex-direction：column` 垂直方向。

当容器内部有侧边栏组件`<v-aside></v-aside>`, 那容器组件主轴会变成 `flex-direction：row` 水平方向。

可为容器指定direction属性，强制设置容器组件的主轴方向


## 代码示例


### 经典布局


典型的页面布局


::: demo layout1

``` html
<template>
  <div>
    <v-container>
      <v-header>v-header</v-header>
      <v-container>v-container</v-container>
      <v-footer>v-footer</v-footer>
    </v-container>

    <v-container>
      <v-header>v-header</v-header>
      <v-container>
        <v-aside>v-aside</v-aside>
        <v-main>v-main</v-main>
      </v-container>
      <v-footer>v-footer</v-footer>
    </v-container>

    <v-container>
      <v-aside>v-aside</v-aside>
      <v-container>
        <v-header>v-header</v-header>
        <v-main>v-main</v-main>
        <v-footer>v-footer</v-footer>
      </v-container>
    </v-container>
  </div>
</template>
```
:::

## API

#### aside props

|属性|说明|类型|默认值|
|-|-|-|-|
|width|宽度|Number\|String|-|
|height|高度|Number\|String|-|

#### container/main props

|属性|说明|类型|默认值|
|-|-|-|-|
|width|宽度|Number\|String|-|
|height|高度|Number\|String|-|
|direction|主轴方向,可选垂直vertical,水平horizontal,默认自动|String|-|
