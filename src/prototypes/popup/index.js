import Modal from '../../components/modal'
import Vue from 'vue'

let rootInstance

class Pop {
  constructor () {
    this.rootEl = null
    this.zIndex = 1000
    this.initPopupId = 1
    this.instances = {}
    this.init()
  }

  init () {
    this.rootEl = document.createElement('div')
    this.rootEl.classList.add('vc-popup-list')
    this.rootEl.style.zIndex = this.zIndex
    document.body.appendChild(this.rootEl)
  }

  createPopup (options = {}) {
    const self = this

    // 实例化modal组件并挂在
    const instance = new Vue({
      data () {
        return {
          popupId: self.initPopupId++
        }
      },
      render (h) {
        let args = {
          style: {
            'z-index': this.popupId + self.zIndex
          },
          props: {
            value: true,
            mask: false,
            ...options
          },
          scopedSlots: self.getScopedSlots(h, options)
        }

        return h(Modal, args)
      }
    }).$mount()

    // 插入页面
    this.rootEl.appendChild(instance.$el)

    this.instances[instance.popupId] = instance
    return this.instances[instance.popupId]
  }

  getScopedSlots (h, options) {
    const scopedSlots = {}

    if (typeof options.content === 'object') {
      scopedSlots.default = props => h(options.content)
    }

    if (typeof options.content === 'function') {
      scopedSlots.default = props => options.content(h, props)
    }

    if (typeof options.header === 'object') {
      scopedSlots.header = props => h(options.header)
    }

    if (typeof options.header === 'function') {
      scopedSlots.header = props => options.header(h, props)
    }

    if (typeof options.footer === 'object') {
      scopedSlots.footer = props => h(options.footer)
    }

    if (typeof options.footer === 'function') {
      scopedSlots.footer = props => options.footer(h, props)
    }

    return scopedSlots
  }
}

/**
 * @param {Object} options
 * options: {
 *  title: 模态框标题,
 *  header: 模态框头部插槽内容
 *  content: 模态框内容插槽内容
 *  footer: 模态框底部插槽内容
 *  ...: 关于剩余参数请参考Modal模态框组件的props
 * }
 */
export default (options) => {
  // 获取实例单例
  rootInstance = rootInstance || new Pop()
  const popInstance = rootInstance.createPopup(options)
  return popInstance
}
