# upload 文件选择

组件内部不集成上传事件

## 代码示例

### 基本使用

::: demo demo-upload
```html
<template>
  <v-upload @change="() => {}">
    <v-button type="info">请选择文件</v-button>
  </v-upload>
</template>
```
:::

### multiple

多选

::: demo demo-upload
```html
<template>
  <v-upload :multiple="false">
    <v-button type="info">单选</v-button>
  </v-upload>
  <v-upload multiple>
    <v-button type="info">多选</v-button>
  </v-upload>
</template>
```
:::

### accept

选择文件类型

::: demo demo-upload
```html
<template>
  <v-upload accept="image/*">
    <v-button type="info">accept=image/*</v-button>
  </v-upload>
</template>
```
:::

### disabled

禁用

::: demo demo-upload
```html
<template>
  <v-upload disabled>
    <v-button type="info">禁用</v-button>
  </v-upload>
</template>
```
:::

### ext

文件类型检查

::: demo demo-upload
```html
<template>
  <v-upload :ext="['PNG', 'JPEG', 'JPG', 'GIF', 'BMP']">
    <v-button type="info">请选择图片</v-button>
  </v-upload>
  <v-upload :ext="['XLS', 'XLSX', 'CSV']">
    <v-button type="info">请选择表格</v-button>
  </v-upload>
</template>
```
:::

### warn

::: demo demo-upload
```html
<template>
  <v-upload :modifiers="[{check: () => false, message: '文件校验失败'}]" :warn="false">
    <v-button type="info">禁用警告</v-button>
  </v-upload>
</template>
```
:::

### modifiers

自定义检查文件

::: demo demo-upload
```html
<template>
  <v-upload :modifiers="[{check: () => false, message: '文件校验失败'}]">
    <v-button type="info">请选择文件</v-button>
  </v-upload>
  <v-upload :modifiers="[{name: 'size', disabled: true}]">
    <v-button type="info">禁用文件大小检查</v-button>
  </v-upload>
</template>
```
:::

## API


| 参数     | 说明             | 类型       | 默认值  |
| -------- | --------        | -------   | ------- |
| multiple     | 多选 | Boolean   | false |
| accept     | 选择文件类型 | String   |  |
| paste     | 监听粘贴事件 | Boolean   | false |
| disabled     | 禁用 | Boolean   | false |
| ext     | 文件类型检查 | Array   |  |
| warn     | 错误消息使用全局message | Boolean   | true |
| modifiers     | 自定义检查文件 | Array   |  |
| modifiers[x].name     | 检查方法，可覆盖`size`,`ext` | String   |  |
| modifiers[x].disabled | 是否禁用 | Boolean   | false |
| modifiers[x].check | 检查方法，返回`true`检查通过 | Function   |  |
| modifiers[x].message  | 错误提醒 | String   |  |

### events

| 事件名    | 说明     | 返回值     | 
| -------- | -------- | -------   |
| change   | 选择文件  | files |
