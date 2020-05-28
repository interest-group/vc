<script>
export default {
  data () {
    return {
      modal1: false,
      modal2: false
    }
  },
  methods: {
    onBeforeClose (next) {
      setTimeout(() => {
        next()
      }, 1000)
    }
  }
}
</script>
# Modal 模态框

以弹出层的形式，引导或者提示用户进行相关的操作

## 代码示例

### 基本使用

可通过修改v-model双向绑定值控制模态框的显示

::: demo demo-modal

```html
<template>
  <v-modal v-model="modal1" title="基本使用">可通过修改v-model双向绑定值控制模态框的显示</v-modal>
  <v-button @click="modal1 = true" type="info">v-model 打开模态框</v-button>
</template>
```
:::

### transition

可通过`transition`参数设置模态框的动画

::: demo demo-modal

```html
<template>
  <v-modal ref="modal0" transition="v-slide-bottom">可通过 transition 参数设置模态框的动画</v-modal>
  <v-button @click="$refs.modal0.open()" type="info">自定义动画</v-button>
</template>
```
:::

### mask-close

控制点击遮罩

::: demo demo-modal

```html
<template>
  <v-modal ref="modal1" :mask-close="false">点击遮罩不关闭模态框</v-modal>
  <v-modal ref="modal2" :mask="false">无遮罩模态框</v-modal>
  <v-button @click="$refs.modal1.open()" type="info">点击遮罩不关闭模态框</v-button>
  <v-button @click="$refs.modal2.open()" type="info">无遮罩模态框</v-button>
</template>
```
:::

### before-close

关闭模态框的回调事件

::: demo demo-modal

```html
<template>
  <v-modal ref="modal3" :before-close="onBeforeClose">模态框</v-modal>
  <v-button @click="$refs.modal3.open()" type="info">回调事件</v-button>
</template>
```
:::

### Modal props

| 属性          | 说明                                               | 类型    | 默认值  |
| ------------- | -------------------------------------------------- | ------- | ------- |
| value         | 是否显示，可使用v-model双向绑定                    | Boolean | false |
| title         | 模态框标题                                         | String  | `标题`      |
| transition    | 模态框显示动画                                   | String  |  `v-slide-top`    |
| mask          | 是否开启遮罩层                                     | Boolean | true  |
| mask-close    | 是否可以通过点击mask来关闭模态框                  | Boolean | true  |
| before-close  | 关闭前的回调，接收一个关闭模态框方法的参数           | Function |       |

### Modal events

| 事件名    | 说明     | 返回值     | 
| -------- | -------- | -------   |
| confirm   | 模态框确认事件  | event |
| cancel    | 模态框取消事件  | event |

### Modal slots

| name   | 说明                   |
| ------ | ---------------------- |
| header  | 模态框的头部内容       |
| default | 模态框的主体内容       |
| footer  | 模态框的底部内容 |
