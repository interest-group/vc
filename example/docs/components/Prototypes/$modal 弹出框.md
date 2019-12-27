# Modal 模态框

`$modal`方法将绑定到`Vue.prototype`原型链上，在组件内容可通过`this.$modal(options)`来调用，创建模态框

## 代码示例

### 基本使用

`$modal()`返回一个包含如下属性控制器对象：
<br />
<br />

    {
      modalId: // 当前modal的id
      close: // 隐藏modal方法
      open: // 显示modal方法
      prev: // 获取前一个modal控制器
      next: // 获取下一个modal控制器
    }

<br />
<br />

### 关于options参数的说明

`options`对象接受一切`<modal>`组件的props，相关说明请查看`<modal>`组件的props说明文档

* ### options.content

`$modal()`的`options.content`接受渲染函数写法或者直接使用`import`之后的`.vue`单文件组件

::: demo modal

```html
<template>
  <div>
    <vc-button @click="open1" type="info">popup1</vc-button>
    <vc-button @click="open2" type="info">使用单文件组件</vc-button>
  </div>
</template>

<script>
import NotFound from '@/pages/404'
export default {
  methods: {
    open1 () {
      const modal = this.$modal({
        title: 'Test $modal method',
        width: '700px',
        content: (h) => {
          return h('div', {
            class: 'heading-middle'
          }, '模态框将在3秒后自动关闭')
        }
      })

      let timer = setTimeout(() => {
        modal.close()
        clearTimeout(timer)
      }, 3000)
    },
    open2 () {
      const modal = this.$modal({
        width: '700px',
        content: NotFound
      })
    },
    open3 () {
      const modal = this.$modal({
        title: 'Test $modal method',
        width: '700px',
        content: (h) => {
          return h('div', {
            class: 'heading-middle'
          }, '自定义内容')
        },
        header: (h) => {
          return h('div', {
            class: 'heading-middle'
          }, '自定义头部')
        }
      })
    },
    open4 () {
      const modal = this.$modal({
        width: '700px',
        content: NotFound,
        footer: (h) => {
          return h('vc-button', {
            on: {
              click: () => {
                modal.close()
              }
            }
          }, '关闭')
        },
        hideHeader: true
      })
    },
    open5 () {
      const modal = this.$modal({
        width: '700px',
        content: NotFound,
        footer: (h) => {
          return h('vc-button', {
            on: {
              click: () => {
                this.open6()
              }
            }
          }, '再打开一个modal')
        }
      })
    },
    open6 () {
      const modal = this.$modal({
        title: '另一个modal',
        width: '700px',
        content: (h) => {
          return h('h3', '另一个modal')
        }
      })
    }
  }
}
</script>
```
:::

* ### options.header 和 options.footer

使用前需要确定 `options.hideHeader, options.hideFooter` 不为 `false`

接收值形式同 `options.content` 属性

注意：传递 `options.header` 属性值时，`<modal>` 组件默认的 关闭图标 就会被替换，如需需要，请自行添加并实现功能

::: demo modal

```html
<template>
  <div>
    <vc-button @click="open3" type="info">自定义Header</vc-button>
    <vc-button @click="open4" type="info">隐藏 Header && 自定义footer</vc-button>
  </div>
</template>

<script>
import NotFound from '@/pages/404'
export default {
  name: 'demo-2',
  methods: {
  }
}
</script>
```
:::

* ### options.onOk, options.onCancel

默认确定和取消按钮的回调

### 可叠加使用modal

::: demo modal

```html
<template>
  <div>
    <vc-button @click="open5" type="info">打开modal</vc-button>
  </div>
</template>

<script>
export default {
  name: 'demo-3',
  methods: {
    
  }
}
</script>
```
:::

