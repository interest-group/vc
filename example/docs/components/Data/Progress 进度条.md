<!-- Created by 337547038 on 2019/8/6 0006. -->
# Progress 进度条
用于显示当前操作进度
 
### 线形进度条
:::demo 
```html
<template>
  <div>
    <p><vc-progress v-model="value1" :border="26"/></p>
    <p><vc-progress :value="30" :border="26"/></p>
    <p><vc-progress :value="100" :border="26"/>自定义100%</p>
    <p><vc-progress :value="100" :border="26" :followText="false"/>自定义100%</p>
  </div>
</template>
<script>
 export default {
   data(){
     return {
       value1:0,
     }
   }
 }
</script>
```
:::

### 其他用法
:::demo 
```html
<template>
  <div>
    <p>设置宽高</p>
    <p><vc-progress :value="50" :radius="300" :border="26" /></p>
    <p>设置背景和进度颜色</p>
    <p><vc-progress :value="30" color="#ddd" borderColor="rgb(255, 73, 73)" :border="26"/></p>
    <p>设置状态</p>
    <p><vc-progress :value="30" color="#ddd" status="success" :border="26" /></p>
    <p>进度文字固定位置</p>
    <p><vc-progress :value="80" :followText="false" :border="26"/></p>
  </div>
</template>
<script>
 export default {
   name: 'progress'
   data(){
     return {
       value1:0,
     }
   }
 }
</script>
```
:::

### 环形进度条
:::demo 
```html
<template>
  <div>
  
    <vc-progress :value="0" :radius="50" :border="8" type="circle"></vc-progress>
    
    <vc-progress :value="30" :radius="50" :border="18" type="circle" ></vc-progress>
    
    <vc-progress :value="50" :radius="50" :border="8" type="circle"></vc-progress>
    
    <vc-progress :value="80" :radius="50" :border="8" color="#ddd" status="danger" borderColor="red" type="circle" ></vc-progress>
    
    <vc-progress :value="100" :radius="50" :border="8" type="circle"></vc-progress>
    
    <vc-progress :value="80" :radius="50" :border="8" type="circle" >自定义</vc-progress>
    
  </div>
</template>
<script>
 export default {
   data(){
     return {
      
     }
   }
 }
</script>
```
:::

## API
### Progress Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|value          | String          |v-model双向绑定|0-100|0
|type           | String         |进度条类型|line/circle|line
|radius         | Number         |圆环半径，单位px。line时为宽|--|0
|border         | Number         |进度条宽，单位px。line时为高|--|0
|color          | String         |背景颜色|--|#ebeef5
|borderColor    | String         |进度颜色|--|#409eff
|duration       | Number/1000    |持续时间，单位毫秒|--|1000毫秒
|showText       | Boolean   |是否显示进度文字|--|true
|followText     | Boolean   |进度文字是否跟随进度的位置,type=line时有效|--|true
|className      | String         |类名|--|--
|status      | String         |状态|primary/warning/success/danger|primary

### Progress slots
|name|说明|
|-|-|
|--|自定义内容
