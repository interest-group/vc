# 样式参考

组件库提供了一些基本的样式类名，希望能够在开发中提供一些帮助。

## 标题

::: demo
```HTML
<template>
  <div class="demo-heading">
    <div class="heading-super">Heading Super: 这是标题！这是标题！这是标题！</div> <br />
    <div class="heading-large text-success">Heading Large: 这是标题！这是标题！这是标题！</div> <br />
    <div class="heading-middle text-error">Heading Middle: 这是标题！这是标题！这是标题！</div> <br />
    <div class="heading-small text-warning">Heading Small: 这是标题！这是标题！这是标题！</div> <br />
    <div class="heading-small text-info">Heading Small: 这是标题！这是标题！这是标题！</div>
  </div>
</template>
```
:::

## 文字

::: demo
```HTML
<template>
  <div class="demo-text">
    <div class="text-large text-success">Text Large: 这是文字！这是文字！这是文字！</div> <br />
    <div class="text-middle text-error">Text Middle: 这是文字！这是文字！这是文字！</div> <br />
    <div class="text-small">Text Small: 这是文字！这是文字！这是文字！</div>  <br />
    <div class="text-large text-bold ">Text Large: 这是文字！这是文字！这是文字！</div> <br />
    <div class="text-middle text-bold text-warning">Text Middle: 这是文字！这是文字！这是文字！</div> <br />
    <div class="text-small text-bold text-info">Text Small: 这是文字！这是文字！这是文字！</div>  <br />
  </div>
</template>
```
:::

## 边框

::: demo
```HTML
<template>
  <div>
    <div class="demo-border">
      <div>默认：</div>
      <div class="bd">全</div>
      <div class="bd-top">上</div>
      <div class="bd-right">右</div>
      <div class="bd-bottom">下</div>
      <div class="bd-left">左</div>
    </div>
    <div class="demo-border">
      <div>success：</div>
      <div class="bd bd-success">全</div>
      <div class="bd-top bd-success">上</div>
      <div class="bd-right bd-success">右</div>
      <div class="bd-bottom bd-success">下</div>
      <div class="bd-left bd-success">左</div>
    </div>
    <div class="demo-border">
      <div>error：</div>
      <div class="bd bd-error">全</div>
      <div class="bd-top bd-error">上</div>
      <div class="bd-right bd-error">右</div>
      <div class="bd-bottom bd-error">下</div>
      <div class="bd-left bd-error">左</div>
    </div>
    <div class="demo-border">
      <div>warning：</div>
      <div class="bd bd-warning">全</div>
      <div class="bd-top bd-warning">上</div>
      <div class="bd-right bd-warning">右</div>
      <div class="bd-bottom bd-warning">下</div>
      <div class="bd-left bd-warning">左</div>
    </div>
    <div class="demo-border">
      <div>info：</div>
      <div class="bd bd-info">全</div>
      <div class="bd-top bd-info">上</div>
      <div class="bd-right bd-info">右</div>
      <div class="bd-bottom bd-info">下</div>
      <div class="bd-left bd-info">左</div>
    </div>
  </div>
</template>
```
:::

## 阴影

::: demo
```HTML
<template>
  <div class="demo-shadow">
    <div class="shadow">默认</div>
    <div class="shadow-light">浅阴影</div>
    <div class="shadow-dark">深阴影</div>
  </div>
</template>
```
:::

### margin, padding使用

l => left
r => right
t => top
b => bottom

## 内外边距

    class = "vc-mg-l-0"

    class = "vc-mg-l-1"

    class = "vc-mg-l-2"

    class = "vc-mg-r-0"

    class = "vc-pd-l-0"

    class = "vc-mg-r-0"

::: tip
vc-是前缀，中间是类型， mg为margin, pd为padding， 后面是方向， 最后面数值代表值, 最大为26px
:::
