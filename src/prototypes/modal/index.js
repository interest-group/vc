import createModal from '../../components/modal/createModal'

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

export default function (options) {
  return createModal(this, options)
}
