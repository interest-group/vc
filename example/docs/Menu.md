# Menu 菜单


## 组件概述


`<vc-menu></vc-menu>` : 菜单容器

`<vc-menu-item></vc-menu-item>` : 菜单组件

`<vc-sub-menu></vc-sub-menu>` : 子菜单组件

`<vc-menu-item-group></vc-menu-item-group>` : 菜单分组组件


## 代码示例

### 基本使用

设置 `v-model` 可以双向绑定激活的菜单

设置属性 `theme` 为 light、dark 可以选择主题

<!-- 
::: demo menu

``` html
<template>
  <div style="display: flex">
    <vc-menu value="2">
      <vc-menu-item name="1">
        <vc-icon name="display"></vc-icon>
        display
      </vc-menu-item>
      <vc-menu-item name="2">
        <vc-icon name="laptop"></vc-icon>
        laptop
      </vc-menu-item>
      <vc-menu-item name="3" disabled>
        <vc-icon name="mobile"></vc-icon>
        mobile
      </vc-menu-item>
      <vc-menu-item name="4">
        <vc-icon name="tablet"></vc-icon>
        tablet
      </vc-menu-item>
      <vc-menu-item name="5">
        <vc-icon name="tv"></vc-icon>
        tv
      </vc-menu-item>
    </vc-menu>
    <vc-menu value="2" theme="dark">
      <vc-menu-item name="1">
        <vc-icon name="display"></vc-icon>
        display
      </vc-menu-item>
      <vc-menu-item name="2">
        <vc-icon name="laptop"></vc-icon>
        laptop
      </vc-menu-item>
      <vc-menu-item name="3" disabled>
        <vc-icon name="mobile"></vc-icon>
        mobile
      </vc-menu-item>
      <vc-menu-item name="4">
        <vc-icon name="tablet"></vc-icon>
        tablet
      </vc-menu-item>
      <vc-menu-item name="5">
        <vc-icon name="tv"></vc-icon>
        tv
      </vc-menu-item>
    </vc-menu>
  </div>
</template>
```
::: -->

### 菜单分组

使用 `<vc-menu-item-group></vc-menu-item-group>` 组件进行分组


<!-- ::: demo menu

``` html
<template>
  <vc-menu>
    <vc-menu-item-group title="device">
      <vc-menu-item name="1">
        <vc-icon name="laptop"></vc-icon>
        laptop
      </vc-menu-item>
      <vc-menu-item name="2" disabled>
        <vc-icon name="mobile"></vc-icon>
        mobile
      </vc-menu-item>
      <vc-menu-item name="3">
        <vc-icon name="tablet"></vc-icon>
        tablet
      </vc-menu-item>
    </vc-menu-item-group>
    <vc-menu-item-group title="system">
      <vc-menu-item name="4">
        <vc-icon name="android"></vc-icon>
        android
      </vc-menu-item>
      <vc-menu-item name="5">
        <vc-icon name="appleinc"></vc-icon>
        iOS
      </vc-menu-item>
      <vc-menu-item name="6">
        <vc-icon name="windows8"></vc-icon>
        windows
      </vc-menu-item>
    </vc-menu-item-group>
  </vc-menu>
</template>
```
::: -->

### 子菜单

使用 `<vc-sub-menu></vc-sub-menu>` 子菜单组件进行内嵌子菜单

设置属性 `openNames` 可以默认展开子菜单

设置属性 `unique` 开启手风琴模式，每次至多展开一个子菜单

::: demo menu

``` html
<template>
  <div style="display: flex">
    <vc-menu>
      <vc-sub-menu name="device" title="device">
        <vc-menu-item name="1">
          <vc-icon name="laptop"></vc-icon>
          laptop
        </vc-menu-item>
        <vc-menu-item name="2" disabled>
          <vc-icon name="mobile"></vc-icon>
          mobile
        </vc-menu-item>
        <vc-menu-item name="3">
          <vc-icon name="tablet"></vc-icon>
          tablet
        </vc-menu-item>
      </vc-sub-menu>
      <vc-sub-menu name="system" title="system">
        <vc-menu-item name="4">
          <vc-icon name="android"></vc-icon>
          android
        </vc-menu-item>
        <vc-menu-item name="5">
          <vc-icon name="appleinc"></vc-icon>
          iOS
        </vc-menu-item>
        <vc-menu-item name="6">
          <vc-icon name="windows8"></vc-icon>
          windows
        </vc-menu-item>
      </vc-sub-menu>
    </vc-menu>
    <vc-menu :default-opened-menus="['device']">
      <vc-sub-menu name="device" title="device">
        <vc-menu-item name="1">
          <vc-icon name="laptop"></vc-icon>
          laptop
        </vc-menu-item>
        <vc-menu-item name="2" disabled>
          <vc-icon name="mobile"></vc-icon>
          mobile
        </vc-menu-item>
        <vc-menu-item name="3">
          <vc-icon name="tablet"></vc-icon>
          tablet
        </vc-menu-item>
      </vc-sub-menu>
      <vc-sub-menu name="system" title="system">
        <vc-menu-item name="4">
          <vc-icon name="android"></vc-icon>
          android
        </vc-menu-item>
        <vc-menu-item name="5">
          <vc-icon name="appleinc"></vc-icon>
          iOS
        </vc-menu-item>
        <vc-menu-item name="6">
          <vc-icon name="windows8"></vc-icon>
          windows
        </vc-menu-item>
      </vc-sub-menu>
    </vc-menu>
    <vc-menu :default-opened-menus="['device']" unique>
      <vc-sub-menu name="device" title="device">
        <vc-menu-item name="1">
          <vc-icon name="laptop"></vc-icon>
          laptop
        </vc-menu-item>
        <vc-menu-item name="2" disabled>
          <vc-icon name="mobile"></vc-icon>
          mobile
        </vc-menu-item>
        <vc-menu-item name="3">
          <vc-icon name="tablet"></vc-icon>
          tablet
        </vc-menu-item>
      </vc-sub-menu>
      <vc-sub-menu name="system" title="system">
        <vc-menu-item name="4">
          <vc-icon name="android"></vc-icon>
          android
        </vc-menu-item>
        <vc-menu-item name="5">
          <vc-icon name="appleinc"></vc-icon>
          iOS
        </vc-menu-item>
        <vc-menu-item name="6">
          <vc-icon name="windows8"></vc-icon>
          windows
        </vc-menu-item>
      </vc-sub-menu>
    </vc-menu>
  </div>
</template>
```
:::

## API

#### menu props

|属性|说明|类型|默认值|
|-|-|-|-|
|value|激活的菜单，可使用 v-model 双向绑定|Number\|String|-|
|theme|主题，可选值为 `light`、`dark`|String|light|
|open-names|展开的子菜单 name 集合|Array|\[\]|

#### menu events

|事件名|说明|参数|
|-|-|-|
|change|切换菜单时触发|name|

#### menu-item props

|属性|说明|类型|默认值|
|-|-|-|-|
|name|菜单项的唯一标识，必填|String\|Number|-|
|to|跳转的链接，支持 `vue-router` 对象|String\|Object|-|
|replace|路由跳转时，开启 replace 将不会向 history 添加新记录|Boolean|false|
|target|a 链接的 target 属性|String|_self|
|disabled|是否禁用|Boolean|false|

#### sub-menu props

|属性|说明|类型|默认值|
|-|-|-|-|
|name|子菜单项的唯一标识，必填|String\|Number|-|
|title|子菜单标题|String|-|
|disabled|是否禁用|Boolean|false|

#### sub-menu slot

|名称|说明|
|-|-|
|无|子菜单项|
|title|子菜单标题|

#### menu-item-group props

|属性|说明|类型|默认值|
|-|-|-|-|
|title|分组标题|String|-|

#### menu-item-group slot

|名称|说明|
|-|-|
|无|菜单项|
|title|分组标题|
