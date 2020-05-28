import { delay } from '../../utils/delay'
import { find, remove } from '../message/noticeInstance'

// 显示通知
export default async function Notice (config) {
  const instance = find(this, { type: 'notice' })
  await delay(50)
  instance.insert(config)
  instance.bindDestroy(remove)
  return instance
}

// 显示提示
Notice.info = async (desc) => Notice({ type: 'info', title: '提示', duration: 2.5, desc })

// 显示成功
Notice.success = async (desc) => Notice({ type: 'success', title: '成功', duration: 2.5, desc })

// 显示警告
Notice.warning = async (desc) => Notice({ type: 'warning', title: '警告', duration: 7.5, desc })

// 显示错误
Notice.error = async (desc) => Notice({ type: 'error', title: '错误', duration: 7.5, desc })
