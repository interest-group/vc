<script>
import Page from '@/pages/404.vue';
export default {
  data: () => ({
    setTimeout: (a, t) => setTimeout(a, t)
  }),
  methods: {
    show () {
      this.$modal({
        header: '使用import的.vue文件',
        content: Page,
        footer: (h) => h('div', {class: 'v-modal__footer'}, '这是一个自定义footer')
      })
    }
  }
}
</script>

# $modal 弹出框

`$modal`方法将绑定到`Vue.prototype`原型链上

在组件内容可通过`this.$modal(options)`来调用，创建弹出框

## 代码示例

### 基本使用

`options`参数接受一切`Modal`组件的props，相关说明请查看`Modal`组件的props说明文档

::: demo demo-modal

```html
<template>
  <v-button @click="$modal({
    title: '简易弹出框',
    content: (h) => h('div', '渲染函数写法的content')
  })" type="info">弹出框</v-button>
</template>
```
:::


### options.header && options.footer

`options.content` / `options.header` / `options.footer` 接受渲染函数写法 或者直接使用`import`之后的`.vue`单文件组件

::: demo demo-modal

```html
<template>
  <v-button @click="show" type="info">自定义弹出框</v-button>
</template>
<script>
import Page from '@/pages/404.vue';
export default {
  methods: {
    show () {
      this.$modal({
        header: '使用import的.vue文件',
        content: Page,
        footer: (h) => h('div', {class: 'v-modal__footer'}, '这是一个自定义footer')
      })
    }
  }
}
</script>
```
:::


### modal实例

`$modal`返回一个包含modal实例的promise

::: demo demo-modal

```html
<template>
  <v-button @click="$modal({
    title: '简易弹出框',
    content: (h) => h('div', '这是一个3秒后会自动关闭的弹出框')
  }).then(modal => {
    setTimeout(() => modal.close(), 3000)
  })" type="info">自动关闭的弹出框</v-button>
</template>
```
:::


### options.on

可使用on方法监听modal事件

::: demo modal

```html
<template>
  <v-button @click="$modal({
    content: (h) => h('div', '监听弹出框confirm事件'),
    on: {
      confirm: () => $message.success('用户点击了确定')
    }
  })" type="info">监听事件</v-button>
</template>
```
:::

### API

## 实例调用

- `this.$modal(options)`


### $modal options


| 参数     | 说明             | 类型       | 默认值  |
| -------- | --------        | -------   | ------- |
| ...options | `Modal`组件的props   |    |  |
| options.on | 监听弹出框事件 | Object   |  |
| options.content | 弹出框v-slot:default | Function/.vue   |  |
| options.header | 弹出框v-slot:header | Function/.vue   |  |
| options.footer | 弹出框v-slot:footer | Function /.vue  |  |
