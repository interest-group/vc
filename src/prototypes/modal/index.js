import ModalList from './ModalList'
import Vue from 'vue'

let modalListInstance

function createModalListInstance () {
  const instance = new Vue(ModalList).$mount()
  document.body.appendChild(instance.$el)
  return instance
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
  modalListInstance = modalListInstance || createModalListInstance()
  const modalController = modalListInstance.createModal(options)
  return modalController
}
