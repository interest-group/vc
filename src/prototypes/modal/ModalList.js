import Modal from '../../components/modal'

export default {
  data () {
    return {
      // 默认给了 1000
      zIndex: 1000,
      // 存储包含渲染函数的渲染器
      modalRenderList: [],
      // 当前显示的modal的id
      activeModalIds: [],
      currentModalId: 1
    }
  },
  computed: {
    isShow (vm) {
      return vm.$children.some(item => item.isModal)
    },
    activeModalRenderList (vm) {
      return this.modalRenderList.filter(item => ~this.activeModalIds.indexOf(item.modalId))
    }
  },
  render (h) {
    return h('div', {
      style: {
        'z-index': this.zIndex,
        display: this.activeModalIds.length ? 'block' : 'none'
      },
      class: 'vc-modal__list'
    }, this.activeModalRenderList.map(item => h(item)))
  },
  methods: {
    createModal (options) {
      const modalId = this.currentModalId++
      // 根据options生成modal的渲染器
      const modalRender = this.getModalRender(modalId, options)
      // 给渲染器添加modalId，以便重新计算渲染视图
      modalRender.modalId = modalId
      // 添加当前创建的modalRender的modalId至激活的id列表
      this.activeModalIds.push(modalId)
      // 缓存modalRender
      this.modalRenderList.push(modalRender)

      return this.getModalController(modalId)
    },
    getModalRender (id, options) {
      const self = this
      return {
        data () {
          return {
            modalId: id
          }
        },
        render (h) {
          let args = {
            style: {
              'z-index': this.id + self.zIndex
            },
            props: {
              value: true,
              mask: false,
              ...options
            },
            on: {
              'on-ok' () {
                self.removeActiveModalId(id)
                options.onOk && options.onOk()
              },
              'on-cancel' () {
                self.removeActiveModalId(id)
                options.onCancel && options.onCancel()
              }
            },
            scopedSlots: self.getScopedSlots(h, options)
          }
          return h(Modal, args)
        }
      }
    },
    // 这个函数应该可以优化一下写法
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
    },
    getModalController (id) {
      return {
        id: id,
        close: this.close(id),
        open: this.open(id),
        prev: this.getPrevModalComponent(id),
        next: this.getNextModalComponent(id)
      }
    },
    removeActiveModalId (id) {
      this.activeModalIds = this.activeModalIds.filter(item => item !== id)
    },
    getModalComponent (id) {
      let curWrapper = this.$children.find(item => item.modalId === id)

      if (curWrapper) return curWrapper.$children[0]
    },
    getPrevModalComponent (id) {
      let prevId = id - 1
      if (this.getModalComponent(prevId)) {
        return this.getModalController(prevId)
      }
    },
    getNextModalComponent (id) {
      let nextId = id + 1
      if (this.getModalComponent(nextId)) {
        return this.getModalController(nextId)
      }
    },
    close (id) {
      return () => {
        // 获取当前modal
        const cur = this.getModalComponent(id)
        // 设置isModal为false关闭当前modal
        cur.isModal = false
        // 从激活的id列表中移除当前modalId，重新渲染视图
        this.removeActiveModalId(id)
        // 返回控制器以便链式调用
        return this.getModalController(id)
      }
    },
    open (id) {
      return () => {
        // 获取当前modal
        const cur = this.getModalComponent(id)
        // 设置isModal为true显示当前modal
        cur.isModal = true
        // 将当前id添加到激活的id列表中，重新渲染视图
        this.activeModalIds.push(id)
        // 返回控制器以便链式调用
        return this.getModalController(id)
      }
    }
  }
}
