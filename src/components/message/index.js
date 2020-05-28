import { delay } from '../../utils/delay'
import { find, remove } from './messageInstance'

// 显示消息
export default async function Message (config) {
  const instance = find(this, { type: 'message' })
  await delay(50)
  instance.insert(config)
  instance.bindDestroy(remove)
  return instance
}

// 显示提示
Message.info = async (desc) => Message({ type: 'info', title: '提示', duration: 2.5, desc })

// 显示成功
Message.success = async (desc) => Message({ type: 'success', title: '成功', duration: 2.5, desc })

// 显示警告
Message.warning = async (desc) => Message({ type: 'warning', title: '警告', duration: 7.5, desc })

// 显示错误
Message.error = async (desc) => Message({ type: 'error', title: '错误', duration: 7.5, desc })
