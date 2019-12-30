import Notification from './notification.vue'
import Vue from 'vue'

Notification.newInstance = props => {
  console.log(props)
  const Instance = new Vue({
    name: 'vc-notification',
    render: h => h(Notification, { props })
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const notification = Instance.$children[0]
  return {
    notice (noticeProps) {
      // console.log(noticeProps)
      notification.handleAdd(noticeProps)
    },
    remove (name) {
      notification.handleClose(name)
    },
    component: notification,
    destroy (element) {
      notification.closeAll()
      setTimeout(() => {
        document.body.removeChild(document.getElementsByClassName(element)[0])
      }, 500)
    }
  }
}
export default Notification
