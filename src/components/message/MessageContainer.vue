<template>
  <transition-group :name="`v-${type}`" appear tag="div" :class="`v-${type}__wrap`"
                    @before-leave="beforeLeave" @after-leave="afterLeave">
    <div v-for="item in dataList" :key="item.key">
      <component :is="is" v-bind="item" @close="handleClose(item.key)"></component>
    </div>
  </transition-group>
</template>
<script>
import VMessage from './Message'
import VNotice from './Notice'
import { getRandom, oneOf } from '../../utils/assist'

export default {
  components: {
    VMessage,
    VNotice
  },
  props: {
    type: {
      validator: (value) => oneOf(value, ['notice', 'message']),
      default: 'message'
    }
  },
  data () {
    return {
      is: this.type === 'message' ? 'VMessage' : 'VNotice',
      dataList: []
    }
  },
  methods: {
    insert (config) {
      this.dataList.push({
        ...config,
        key: getRandom()
      })
    },
    handleClose (key) {
      this.dataList = this.dataList.filter(n => n.key !== key)
    },
    beforeLeave (el) {
      el.style.display = 'flex'
      el.style.height = `${el.offsetHeight}px`
    },
    afterLeave () {
      if (this.dataList.length < 1) {
        if (this.cb) this.cb()
        this.$root.destroy()
      }
    },
    bindDestroy (cb) {
      this.cb = cb
    }
  }
}
</script>
