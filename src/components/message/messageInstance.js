import createInstance from '../base/insert'
import MessageContainer from './MessageContainer'

let messageInstance = null

export function find (ref, props) {
  messageInstance = messageInstance || createInstance(ref, MessageContainer, { props })
  return messageInstance
}
export function remove () {
  messageInstance = null
}
