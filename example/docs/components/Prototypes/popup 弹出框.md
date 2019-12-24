# Modal 模态框

以弹出层的形式，引导或者提示用户进行相关的操作

## 代码示例

### 基本使用

::: demo modal

```html
<template>
  <div>
    <vc-button @click="open1" type="info">popup1</vc-button>
  </div>
</template>

<script>
import button from '@/pages/button'
export default {
  methods: {
    open1 () {
      const popup = this.$popup({
        width: '700px',
        content: (h) => {
          return h('vc-button', {
            on: {
              click: this.open2
            }
          }, 'popup')
        }
      })

      setTimeout(() => {
        popup.close()
      }, 2000)
    },
    open2 () {
      const popup = this.$popup({
        content: button
      })
    }
  }
}
</script>
```
:::