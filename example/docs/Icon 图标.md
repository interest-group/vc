# Icon图标

提供了一套常用的图标集合。

## 使用方法

直接通过设置名字为 ```iconName``` 来使用即可。例如：
::: demo 
``` html
<vc-icon name="home"></vc-icon> 
<vc-icon name="tv"></vc-icon> 
<vc-icon name="laptop"></vc-icon>
```
:::
## 图标集合

<div class="vc-icon_box">
  <div class="vc-icon_item" v-for="(item, index) in iconList" :key="index" @click="onCopy(item)">
    <div class="vc-icon_item-content">
      <vc-icon :name="item.className" size="30"></vc-icon>
      <p class="vc-icon_text">{{item.className}}</p>
    </div>
  </div>
</div>

## API
...

<script>
export default {
  data() {
    return {
      iconList: [
        {
          className: 'home'
        },
        {
          className: 'tv'
        },
        {
          className: 'laptop'
        },
        {
          className: 'windows8'
        },
        {
          className: 'appleinc'
        },
        {
          className: 'android'
        },
        {
          className: 'system'
        },
        {
          className: 'tablet'
        },
        {
          className: 'mobile'
        }
      ]
    }
  },
  methods: {
    onCopy(item) {
      let textarea = document.createElement('textarea')
      textarea.innerHTML = `<vc-icon name="${item.className}"></vc-icon>`
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      alert('复制成功')
      document.body.removeChild(textarea)
    }
  }
}
</script>
