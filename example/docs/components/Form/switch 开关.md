<script>
export default {
  data() {
    return{
      checked: false,
      checkedNumber: 1,
      checked1: true,
      checked2: false,
      checked3: true,
      checked4: false
    }
  },
  methods: {
    beforeChange(next) {
      next()
    },
    beforeChange1(next) {
      setTimeout(() => {
        next()
      }, 1000)
    },
    change(val) {
      console.log(val)
    }
  }
}
</script>

# switch开关
两种互相对立的状态， 可用于触发开关，设置状态

### 基本用法

::: demo
```html
<vc-switch v-model="checked"></vc-switch>
<script>
export default {
  data() {
    return{
      checked: false,
    }
  }
}
</script>
```
:::

### 类型改变
如果通过```v-model```绑定的值是整型，那么回调出来的值也将是整型
::: demo
```html
<vc-switch v-model="checkedNumber" @change="change"></vc-switch>
<script>
export default {
  data() {
    return{
      checkedNumber: 1,
    }
  },
  methods: {
    change(val) {
      console.log(val) // => 0 || 1
    }
  }
}
</script>
```
:::


### 添加文字描述

设置 ```activeText``` 和 ```inactiveText``` 属性来设置开关的文字描述。
::: demo
```html
<vc-switch 
  v-model="checked1" 
  active-text="打开"
  inactive-text="关闭"/>
<script>
export default {
  data() {
    return{
      checked1: true
    }
  }
}
</script>
```
:::


### 钩子用法
通过传入 ```beforeChange``` 钩子函数， 对开关改变之前做相应的处理
::: demo
``` html 
<vc-switch 
  v-model="checked2" 
  :beforeChange="beforeChange">
</vc-switch>
<vc-switch 
  v-model="checked3" 
  :beforeChange="beforeChange1">
</vc-switch>
<script>
export default {
  data() {
    return{
      checked2: false,
      checked3: true
    }
  },
  methods: {
    beforeChange(next) {
      next()
    },
    beforeChange1(next) {
      // 点击后延迟1s改变
      setTimeout(() => {
        next()
      }, 1000)
    }
  }
}
</script>

```
:::
::: warning
如果没有传入```beforeChange```钩子，点击后会立即改变， 如果传入了```beforeChange```钩子函数， 必须要触发 ```next()```方法，```beforeChange``` 钩子函数在```next()```方法上次未调用完成之前， 不会触发下一次的执行， 
:::

### 禁用
设置 ```disabled``` 禁用开关
::: demo
``` html
<vc-switch 
  v-model="checked4"
  disabled
  inactiveColor="#ff4949" />
<script>
export default {
  data() {
    return{
      checked4: false
    }
  }
}
</script>
```
:::

## API
### Switch Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|v-model|Boolean / Number|绑定值|-|-|
|disabled|Boolean|是否禁用|-|false|
|inactive-color|String|关闭时的颜色|-|#dcdfe6|
|active-color|String|打开时的颜色|-|#67c23a|
|width|Number|switch 的宽度（像素）|-|40|
|active-text|String|打开时的文字描述|-|-|
|inactive-text|String|关闭时的文字描述|-|-|
|beforeChange|Function|改变之前的钩子函数，回调参数为```next()```方法|-|-|

### Switch Events
|事件名称|说明|回调参数|
|-|-|-|
|change|switch 状态发生变化时的回调函数|新状态的值
