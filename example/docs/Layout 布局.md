# Layout 布局


## 组件概述


`<vc-container></vc-container>` : 布局容器组件

`<vc-main></vc-main>` : 内容容器组件

`<vc-header></vc-header>` : 顶部组件

`<vc-footer></vc-footer>` : 底部组件

`<vc-aside></vc-aside>` : 侧边栏组件

`<vc-article></vc-article>` : 内容组件

`<vc-nav></vc-nav>` : 导航组件

两个容器组件 `<vc-container></vc-container><vc-main></vc-main>` , 其余都是嵌套的子组件。

容器组件采用flex布局，默认主轴为 `flex-direction：column` 垂直方向。

当容器内部有侧边栏组件`<vc-aside></vc-aside>`, 那容器组件主轴会变成 `flex-direction：row` 水平方向。

可为容器指定direction属性，强制设置容器组件的主轴方向


## 代码示例


### 经典布局


典型的页面布局


::: demo layout1

``` html
<template>
  <div>
    <vc-container>
      <vc-header>vc-header</vc-header>
      <vc-container>vc-container</vc-container>
      <vc-footer>vc-footer</vc-footer>
    </vc-container>

    <vc-container>
      <vc-header>vc-header</vc-header>
      <vc-container>
        <vc-aside>vc-aside</vc-aside>
        <vc-main>vc-main</vc-main>
      </vc-container>
      <vc-footer>vc-footer</vc-footer>
    </vc-container>

    <vc-container>
      <vc-aside>vc-aside</vc-aside>
      <vc-container>
        <vc-header>vc-header</vc-header>
        <vc-main>vc-main</vc-main>
        <vc-footer>vc-footer</vc-footer>
      </vc-container>
    </vc-container>
  </div>
</template>
```
:::

## API

#### aside props

|属性|说明|类型|默认值|
|-|-|-|-|
|width|宽度|number\|String|-|
|height|高度|number\|String|-|

#### container/main props

|属性|说明|类型|默认值|
|-|-|-|-|
|width|宽度|number\|String|-|
|height|高度|number\|String|-|
|direction|主轴方向,可选垂直vertical,水平horizontal,默认自动|String|-|
