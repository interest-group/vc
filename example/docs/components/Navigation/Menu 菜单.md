# Menu 菜单


## 组件概述


`Menu` : 菜单容器

`MenuItem` : 菜单组件

`SubMenu` : 子菜单组件

`MenuGroup` : 菜单分组组件


## 代码示例

### 基本使用

为MenuItem设置属性 `to` 

::: demo menu

``` html
<template>
  <v-menu>
    <v-menu-item to="#01">display</v-menu-item>
    <v-menu-item to="#02">laptop</v-menu-item>
    <v-menu-item to="#03">mobile</v-menu-item>
    <v-menu-item to="#04">tablet</v-menu-item>
    <v-menu-item to="#05">tv</v-menu-item>
  </v-menu>
</template>
```
:::

### 菜单分组

使用 `MenuGroup` 组件进行分组


::: demo menu

``` html
<template>
  <v-menu>
    <v-menu-group title="device">
      <v-menu-item to="#11">laptop</v-menu-item>
      <v-menu-item to="#12">mobile</v-menu-item>
    </v-menu-group>
    <v-menu-group title="system">
      <v-menu-item to="#13">android</v-menu-item>
      <v-menu-item to="#14">iOS</v-menu-item>
    </v-menu-group>
  </v-menu>
</template>
```
:::

### 子菜单

使用 `SubMenu` 子菜单组件进行内嵌子菜单

设置属性 `openNames` 可以默认展开子菜单

设置属性 `accordion` 开启手风琴模式，每次至多展开一个子菜单

::: demo menu

``` html
<template>
  <v-menu :open-names="['device']" accordion>
    <v-sub-menu name="device" title="device">
      <v-menu-item to="#21">laptop</v-menu-item>
      <v-menu-item to="#22">mobile</v-menu-item>
    </v-sub-menu>
    <v-sub-menu name="system" title="system">
      <v-menu-item to="#23">android</v-menu-item>
      <v-menu-item to="#24">iOS</v-menu-item>
    </v-sub-menu>
  </v-menu>
</template>
```
:::

## API

### Menu props

| 属性     | 说明      | 类型     | 默认值  |
| -------- | -------- | ------- | ------- |
| open-names | 展开的菜单项 | Array  | [] |
| accordion | 手风琴模式 | Boolean  | false |

### MenuGroup props

| 属性     | 说明      | 类型     | 默认值  |
| -------- | -------- | ------- | ------- |
| title   | 标题 | String  |  |

### SubMenu props

| 属性     | 说明      | 类型     | 默认值  |
| -------- | -------- | ------- | ------- |
| name    | 与 open-names 对应 | String  |  |
| title   | 标题 | String  |  |
| disabled | 禁用 | Boolean  | false |

### SubMenu slots

| 名称      | 说明      |
| --------  | -------- |
| default   | 子菜单项 |
| title   | 子菜单标题 |

### MenuItem props

| 属性     | 说明      | 类型     | 默认值  |
| -------- | -------- | ------- | ------- |
| tag | 渲染标签 | String  | `a` |
| to | 路由参数 | Any  |  |
| disabled | 禁用 | Boolean  | false |
