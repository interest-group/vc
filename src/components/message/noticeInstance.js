import createInstance from '../base/insert'
import MessageContainer from './MessageContainer'

let noticeInstance = null

export function find (ref, props) {
  noticeInstance = noticeInstance || createInstance(ref, MessageContainer, { props })
  return noticeInstance
}
export function remove () {
  noticeInstance = null
}
