<template>
  <div :class="preCls"
       :style="wrapStyles">
    <Notice v-for="notice in notices"
            :key="notice.name"
            :preCls="preCls"
            :type="notice.type"
            :duration="notice.duration"
            :transitionName="notice.transitionName"
            :content="notice.content"
            :onClose="notice.onClose"
            :closable="notice.closable"
            :name="notice.name"
            @close="handleClose">
    </Notice>
  </div>
</template>
<script>
import Notice from './notice.vue'
import { transferIncrease } from '../../../utils/transfer'
import { prefixCls } from '../../../utils/assist'

export default {
  name: 'vc-notification-small',
  components: { Notice },
  props: {
    preCls: {
      type: String,
      default: prefixCls('notification')
    }
  },
  data () {
    return {
      notices: [],
      tIndex: transferIncrease()
    }
  },
  computed: {
    wrapStyles () {
      return Object.assign({}, this.styles, {
        'z-index': 51010 + this.tIndex // todo 将改为1010
      })
    }
  },
  methods: {
    handleAdd (options) {
      this.notices.push(options)
      this.tIndex = transferIncrease()
    },
    handleClose (name) {
      const index = this.notices.findIndex((item) => item.name === name)
      this.notices.splice(index, 1)
    },
    closeAll () {
      this.notices = []
    }
  }
}
</script>
