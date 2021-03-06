# 项目说明

本组件库目前还在开发中，仅提供用来学习

## 项目目录说明

```
.
├── dist // 打包输出的文档页面文件
├── example // 未打包文档页面源码文件
├── lib // 组件库打包后的lib文件
└── src // 组件库源码文件
```

## 命令说明

- server：开发模式下运行文档页面
- build-home：打包输出文档页面文件
- build-lib：打包输出库文件
- deploy: 推送代码到github仓库gh-pages分支


## 组件代码

    ./src
    ├── components // 组件文件
    │   ├── icon
    │   │   ├── Icon.vue
    │   │   └── index.js
    │   └── index.js
    ├── styles // 样式文件
    │   ├── components // 组件样式文件
    │   │   └── icon.scss
    │   ├── _transition.scss // 通用动画
    │   ├── _variables.scss // sass变量
    │   └── index.scss
    ├── directives // 指令文件
    │   └── index.js
    ├── prototypes // 实例方法
    │   └── index.js
    └── utils // 工具函数
    │   └── index.js
    └── index.js

## 示例代码规范

    ./example
    ├── docs // 组件文档
    │   └── Layout 布局.md
    ├── docs-styles // 组件文档样式
    │   └── index.scss
    ├── assets // 资源
    │   └── logo.png
    ├── main.js
    ├── App.vue
    └── router.js

直接在 `docs/` 目录下创建 `**.md` 文件作为组件文档，已经自动引入vue-router配置。


## 关于组件文件

格式：

    ./src/components/button/
    ├── Button.vue
    └── index.js 必须


导出单个组件

```js
// index.js
import Button from './Button'

export default Button

```

导出多个组件

```js
// index.js
import Header from './Header'
import Article from './Article'

export default [
  Header,
  Article
]

```

按照这种格式创建组件，不需要再其他地方引入注册，可以直接在案例代码中使用，如：

```html
<vc-button>..</vc-button>
```

## 关于组件文档

格式：


    ./example
    ├── docs // 组件文档
    │   └── Button 按钮.md
    └── docs-styles // 组件文档样式
        │── button.scss
        └── index.scss


## 文档内嵌组件

``` md
// *.md 文档

...组件介绍

// demo为组件关键字，btn将渲染为组件class="doc-btn"，作为样式选择器。
::: demo btn

\``` html
<template>
  <vc-button>按钮</vc-button>
</template>
<script>
export default {}
</script>
\```
:::

```

## 文档内嵌组件样式

``` scss
// index.scss
@import "./button";

// button.scss
.doc-btn{
  .vc-button{
    color: #999;
  }
}
```