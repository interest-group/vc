# Menu 菜单


## 组件概述


`<vc-menu></vc-menu>` : 菜单容器

`<vc-menu-item></vc-menu-item>` : 菜单组件

`<vc-sub-menu></vc-sub-menu>` : 子菜单组件

`<vc-menu-group></vc-menu-group>` : 菜单分组组件


## 代码示例


::: demo menu1

``` html
<template>
  <vc-menu accordion>
    <vc-menu-item name="home3">home1</vc-menu-item>
    <vc-menu-item name="home2">home2</vc-menu-item>
    <vc-menu-group title="group-title">
      <vc-menu-item name="bb">/component/bb</vc-menu-item>
    </vc-menu-group>
    <vc-sub-menu name="sub" title="sub-title">
      <vc-menu-item name="sub-menu1">sub-menu1</vc-menu-item>
      <vc-menu-item name="sub-menu2">sub-menu2</vc-menu-item>
    </vc-sub-menu>
    <vc-sub-menu name="sub2" title="sub-title2">
      <vc-menu-item name="sub-menu12">sub-menu12</vc-menu-item>
      <vc-menu-item name="sub-menu22">sub-menu22</vc-menu-item>
    </vc-sub-menu>
  </vc-menu>
</template>
```
:::

## API

#### menu props

...
