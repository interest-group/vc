import Notification from '../base/notification'
import { prefixCls } from '../../utils/assist'

const preCls = prefixCls('message')
let noticeInstance
let name = 1
function getNoticeInstance () {
  noticeInstance = noticeInstance || Notification.newInstance({ preCls })
  // console.log(noticeInstance)
  return noticeInstance
}
function notice (options) {
  const noticeName = `vc-${preCls}_key_${++name}`
  getNoticeInstance().notice({
    name: noticeName,
    duration: options.duration,
    transitionName: preCls,
    content: {
      preCls,
      type: options.type,
      title: options.title,
      desc: options.desc
    },
    onClose: options.onClose,
    closable: true,
    type: 'message'
  })
  return noticeName
}

export default {
  name: 'vc-message',
  parseOptions (options) {
    return typeof options === 'object' ? options : { desc: options || '' }
  },
  info (options) {
    const config = { type: 'info', title: '提示', duration: 1.5 }
    const params = this.parseOptions(options)
    return notice({ ...config, ...params })
  },
  success (options) {
    const config = { type: 'success', title: '成功', duration: 1.5 }
    const params = this.parseOptions(options)
    return notice({ ...config, ...params })
  },
  warning (options) {
    const config = { type: 'warning', title: '警告', duration: 1.5 }
    const params = this.parseOptions(options)
    return notice({ ...config, ...params })
  },
  error (options) {
    const config = { type: 'error', title: '错误', duration: 1.5 }
    const params = this.parseOptions(options)
    return notice({ ...config, ...params })
  },
  close (name) {
    if (name && noticeInstance) {
      noticeInstance.remove(name.toString())
    }
  },
  destroy () {
    let instance = getNoticeInstance()
    noticeInstance = null
    instance.destroy(preCls)
  }
}
