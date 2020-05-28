import Vue from 'vue'

function getConfig (config, h) {
  return config instanceof Function ? config(h) : config
}

/**
 * 显示弹窗
 * @param creator      创建者
 * @param wrap         容器组件
 * @param wrapConfig    容器组件配置项
 * @param content      内容组件
 * @param contentConfig 内容组件配置项
 */

export default function (creator, wrap, wrapConfig, content, contentConfig) {
  // 组件实例
  let instance = null
  // 弹窗组件节点
  let element = null

  const Instance = new Vue({
    name: 'v-insert',
    render: (h) => h(
      // 容器组件
      wrap,
      // 属性
      {
        ref: 'wrap',
        ...getConfig(wrapConfig, h)
      },
      // 子节点
      content ? [
        h(
          // 子组件
          content,
          {
            ref: 'content',
            ...getConfig(contentConfig, h)
          }
        )
      ] : []
    ),
    methods: {
      destroy () {
        this.$destroy()
        document.body.removeChild(element)
      },
      getCreator () {
        return creator
      }
    }
  })
  element = Instance.$mount().$el
  document.body.appendChild(element)
  instance = Instance.$children[0]
  return instance
}
