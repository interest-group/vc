<template>
  <transition :name="transitionName"
              appear
              @before-leave="handleBeforeLeave">
    <div :class="boxStyle">
      <Notice v-if="type === 'message'"
              :content="content"
              :closable="closable"
              :duration="duration"
              @close="handleClose"></Notice>
    </div>
  </transition>
</template>
<script>
import Notice from '../../message/message.vue'
export default {
  name: 'vc-notice',
  components: {
    Notice
  },
  props: {
    preCls: {
      type: String,
      default: ''
    },
    type: {
      type: String
    },
    duration: {
      type: Number,
      default: 1.5
    },
    transitionName: {
      type: String
    },
    content: {
      type: Object,
      default () {
        return {}
      }
    },
    closable: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function
    },
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    boxStyle () {
      return [
        `${this.preCls}-box`,
        {
          [`${this.preCls}-box-short`]: !this.content.desc
        }
      ]
    }
  },
  methods: {
    // 关闭
    handleClose () {
      if (this.onClose instanceof Function) {
        this.onClose()
      }
      this.$emit('close', this.name)
    },
    handleBeforeLeave (el) {
      if (this.type === 'message') {
        el.style.height = `${el.getBoundingClientRect().height}px`
      }
    }
  },
  mounted () {
  }
}
</script>
