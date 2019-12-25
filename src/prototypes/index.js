import createModal from './modal'

export default {
  /**
   * @param {Class} Vue
   * @param {{scope: String | Boolean}} options 非必填，scope是所有方法的命名空间，当为true时默认为`vc`
   */
  install (Vue, options = {}) {
    let namespace = options.scope ? typeof options.scope === 'boolean' ? 'vc' : options.scope : false
    if (namespace) {
      Vue.prototype[namespace]['$modal'] = createModal
    } else {
      Vue.prototype['$modal'] = createModal
    }
  }
}
