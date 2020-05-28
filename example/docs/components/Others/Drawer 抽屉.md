# Drawer 抽屉

## 代码示例

### 基本使用

::: demo

```HTML
<template>
  <v-drawer ref="drawer" position="left"><div>抽屉</div></v-drawer>
  <v-button @click="() => $refs.drawer.show()">显示抽屉</v-button>
</template>
```
:::

### position

抽屉位置

::: demo demo-drawer

```HTML
<template>
  <v-drawer v-model="visible" :position="position"><div>抽屉</div></v-drawer>
  <v-button @click="show('left')">left</v-button>
  <v-button @click="show('right')">right</v-button>
  <v-button @click="show('top')">top</v-button>
  <v-button @click="show('bottom')">bottom</v-button>
</template>
<script>
export default {
  data () {
    return {
       position: 'left',
       visible: false
     }
  },
  methods: {
    show (position) {
      this.position = position
      this.visible = true
    }
  }
}
</script>
```
:::

## API

### Collapse props

| 属性     | 说明          | 类型    | 默认值  |
| -------- | ------------ | ------- | ------- |
| value     | 显示状态，可使用v-model双向绑定 | Boolean  |   false      |
| position  | 显示位置，可选值为`left`, `top`, `right`, `bottom` | String  | `left` |
| mask  | 是否显示遮罩 | Boolean  | true |
| mask-close  | 点击遮罩是否关闭抽屉 | Boolean  | true |

