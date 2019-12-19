# Modal 模态框

以弹出层的形式，引导或者提示用户进行相关的操作

### Modal Props

| 属性          | 说明                             | 类型    | 默认值  |
| ------------- | -------------------------------- | ------- | ------- |
| value         | 控制是否显示模态框               | Boolean | `false` |
| title         | 模态框标题                       | String  | --      |
| mask          | 是否开启遮罩层                   | Boolean | `true`  |
| close-icon    | 控制显示隐藏右上角显示关闭按钮   | Boolean | `true`  |
| close-by-mask | 是否可以通过点击mask来关闭模态框 | Boolean | `true`  |
| header        | 控制显示隐藏模态框头部部分       | Boolean | `true`  |
| footer        | 控制显示隐藏模态框底部部分       | Boolean | `true`  |

### Modal Event

| 事件   | 说明                     | 回调参数              |
| ------ | ------------------------ | --------------------- |
| change | 模态框关闭开启触发的回调 | 模态框的`value`属性值 |

### Modal Slot

| name   | 说明                   |
| ------ | ---------------------- |
| header | 模态框的头部内容       |
| --     | 模态框的主体内容       |
| footer | 模态框的底部操作区内容 |