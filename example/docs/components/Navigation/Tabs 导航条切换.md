<script>
export default {
  data() {
    return{
      active1: 'order',
      active2: 'users',
      active3: 'users',
      tabList: [
        {
          name: 'users',
          title: '客户管理'
        },
        {
          name: 'order',
          title: '订单管理'
        },
        {
          name: 'configs',
          title: '配置管理'
        }
      ]
    }
  },
  created () {
  },
  watch: {
    active1 (val) {
    }
  },
  methods: {
    tabChange(tab, e) {
      console.log(tab, e)
    }
  }
}
</script>

# Tabs 标签页


### 基础用法
::: demo
``` html
<vc-tabs v-model="active1" @tab-change="tabChange">
  <vc-tabs-item label="客户管理" name="users">客户管理</vc-tabs-item>
  <vc-tabs-item label="订单管理" name="order">订单管理</vc-tabs-item>
  <vc-tabs-item label="配置管理" name="configs">配置管理</vc-tabs-item>
</vc-tabs>
<script>
export default {
  data() {
    return{
      active1: 'order'
    }
  },
  methods: {
    tabChange(tab, e) {
      console.log(tab, e)
    }
  }
}
</script>
```
:::

### 选项卡
::: demo
``` html
<vc-tabs v-model="active2" type="card">
  <vc-tabs-item label="客户管理" name="users">客户管理</vc-tabs-item>
  <vc-tabs-item label="订单管理" name="order">订单管理</vc-tabs-item>
  <vc-tabs-item label="配置管理" name="configs">配置管理</vc-tabs-item>
</vc-tabs>
<script>
export default {
  data() {
    return{
      active2: 'users'
    }
  },
}
</script>
```
:::

## API
### Tabs Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
| v-model | String | 绑定值，选中选项卡的 name | - | 第一个选项卡的 name |
| type | String | 风格类型 | tabs / card | tabs|
|line-color | String | 底部线条颜色 | - | #409eff|

### Tabs Events
|事件名称 | 说明 | 回调参数|
|-|-|-
|tab-change | tab 被选中时触发 | 被选中的标签 tab 实例

### Tabs-item Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|label | String | 选项卡标题 | - |-|
|name | String | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | - | -|
|disabled | Boolean | 禁用选项卡 | - | false|