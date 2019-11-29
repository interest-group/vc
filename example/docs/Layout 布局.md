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

### 代码示例



#### 实例1

这里是描述文字

::: demo

``` html
<template>
  <vc-container height="200px">
    <vc-header style="padding: 10px 0;background: #7CBCE9;color: #FFF;text-align: center;">
      <div>{{header}}</div>
    </vc-header>
    <vc-main>
      <vc-aside style="padding: 10px;background: #3a9fe8;color: #FFF;text-align: center;">
        <div>vc-aside</div>
      </vc-aside>
      <vc-main style="padding: 10px;background: #0f8de9;color: #FFF;text-align: center;">
        <div>vc-main</div>
      </vc-main>
    </vc-main>
    <vc-footer style="padding: 10px 0;background: #7CBCE9;color: #FFF;text-align: center;">
      <div>vc-footer</div>
    </vc-footer>
  </vc-container>
</template>
<script>
export default {
  props: {
    msg: String
  },
  data () {
    return {
      header: 'vc-header'
    }
  }
}
</script>
```
:::

更多示例...

## API
...