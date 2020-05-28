# Tabs 标签页

### tabs

::: demo

```html
<template>
  <v-tabs type="tabs" value="order">
    <v-tabs-item label="客户管理" name="customer">客户管理</v-tabs-item>
    <v-tabs-item label="订单管理" name="order">订单管理</v-tabs-item>
    <v-tabs-item label="配置管理" name="configs">配置管理</v-tabs-item>
    <v-tabs-item label="用户管理" name="users">用户管理</v-tabs-item>
  </v-tabs>
</template>
```
:::

### card

::: demo

```html
<template>
  <v-tabs type="card" value="order">
    <v-tabs-item label="客户管理" name="customer">客户管理</v-tabs-item>
    <v-tabs-item label="订单管理" name="order">订单管理</v-tabs-item>
    <v-tabs-item label="配置管理" name="configs">配置管理</v-tabs-item>
    <v-tabs-item label="用户管理" name="users">用户管理</v-tabs-item>
  </v-tabs>
</template>
```
:::

### 钩子用法
::: demo
```html
<template>
  <v-tabs :before-change="(next) => next()">
    <v-tabs-item label="客户管理" name="customer">客户管理</v-tabs-item>
    <v-tabs-item label="订单管理" name="order">订单管理</v-tabs-item>
    <v-tabs-item label="配置管理" name="configs">配置管理</v-tabs-item>
    <v-tabs-item label="用户管理" name="users">用户管理</v-tabs-item>
  </v-tabs>
</template>

```
:::

## API

### Tabs props

| 属性     | 说明          | 类型    | 默认值  |
| -------- | ------------ | ------- | ------- |
| value     | 选中选项卡的name，可使用v-model双向绑定 | String  |        |
| type     | 标签页风格，可选值为`tabs`, `card`     | String  |  `tabs`    |
| line-color | 导航线颜色，仅`type=tabs`可用     | String  |      |
| before-change | 切换选项卡钩子     | Function  |      |

### TabsItem props

| 属性     | 说明          | 类型    | 默认值  |
| -------- | ------------ | ------- | ------- |
| label     | 选项卡标题 | String  |        |
| name     | 选项卡别名     | String  |    |
| disabled     | 禁用选项卡     | Boolean  |  false  |
