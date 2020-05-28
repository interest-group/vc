# Swiper 轮播

## 代码示例

### direction

按钮切换

:::demo demo-swiper
```html
<template>
  <v-swiper direction>
    <v-swipe-item>
      <div class="page page-1">page 1</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-2">page 2</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-3">page 3</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-4">page 4</div>
    </v-swipe-item>
  </v-swiper>
</template>
```
:::

### control

显示指示点

:::demo demo-swiper
```html
<template>
  <v-swiper direction control>
    <v-swipe-item>
      <div class="page page-1">page 1</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-2">page 2</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-3">page 3</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-4">page 4</div>
    </v-swipe-item>
  </v-swiper>
</template>
```
:::

### speed

切换速度

:::demo demo-swiper
```html
<template>
  <v-swiper direction :speed="2000">
    <v-swipe-item>
      <div class="page page-1">page 1</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-2">page 2</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-3">page 3</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-4">page 4</div>
    </v-swipe-item>
  </v-swiper>
</template>
```
:::

### autoplay

自动轮播

:::demo demo-swiper
```html
<template>
  <v-swiper autoplay :delay="2000">
    <v-swipe-item>
      <div class="page page-1">page 1</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-2">page 2</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-3">page 3</div>
    </v-swipe-item>
    <v-swipe-item>
      <div class="page page-4">page 4</div>
    </v-swipe-item>
  </v-swiper>
</template>
```
:::

## API

### Swiper props

| 属性     | 说明          | 类型    | 默认值  |
| -------- | ------------ | ------- | ------- |
| value     | 当前索引，可使用v-model双向绑定 | Number  |   0      |
| speed     | 切换速度，毫秒 | Number  |   500      |
| direction     | 显示切换按钮 | Boolean  |   false      |
| control     | 显示指示点 | Boolean  |   false      |
| autoplay     | 自动播放 | Boolean  |   false      |
| delay     | 自动播放延迟 | Number  |   3000      |

