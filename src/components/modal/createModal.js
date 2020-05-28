import { delay } from '../../utils/delay'
import createInstance from '../base/insert'
import Modal from './Modal'

function getScopedSlots (h, options) {
  const scopedSlots = {}
  Object.entries({ default: 'content', header: 'header', footer: 'footer' }).forEach(([slot, key]) => {
    if (options[key] instanceof Function) {
      scopedSlots[slot] = props => options[key](h, props)
    } else if (typeof options[key] === 'object') {
      scopedSlots[slot] = props => h(options.content)
    }
  })
  return scopedSlots
}

export default async function (ref, options = {}) {
  const instance = createInstance(ref, Modal, (h) => ({
    props: options,
    scopedSlots: getScopedSlots(h, options),
    on: {
      ...options.on,
      close: () => setTimeout(() => {
        instance.$root.destroy()
      }, 200)
    }
  }))
  await delay(50)
  instance.open()
  return instance
}
