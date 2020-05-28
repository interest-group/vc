<template>
  <span class="v-upload" :class="{'v-upload__drag-hover': hover}" @click="handleClick" @paste="handlePaste"
        @dragover.prevent="hover = true" @dragleave.prevent="hover = false" @drop.prevent="onDrop">
    <slot :hover="hover"></slot>
    <input ref="input" type="file" class="v-upload-input" :multiple="multiple"
           @change="handleChange" :accept="accept">
  </span>
</template>
<script>
import Message from '../message'

function getBaseModifiers (extList) {
  return [
    {
      // 检查文件大小
      name: 'size',
      disabled: false,
      check: (file) => file.size <= 5 * 1024 * 1024,
      message: '上传文件最大不能超过5M'
    },
    {
      // 检查文件扩展名
      name: 'ext',
      disabled: false,
      check: (file) => {
        if (!extList.length) return true
        const name = typeof file.name === 'string' ? file.name : ''
        const ext = name.substr(name.lastIndexOf('.') + 1).toUpperCase()
        return extList.map(e => e.toUpperCase()).includes(ext.toUpperCase())
      },
      message: '文件类型不合法'
    }
  ]
}

export default {
  name: 'v-upload',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    paste: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // input原生属性
    accept: {
      type: String
    },
    // 文件类型检查
    ext: {
      type: Array,
      default () {
        return []
      }
    },
    // 检查文件方法
    modifiers: {
      type: Array,
      default () {
        return []
      }
    },
    // 检查错误使用Message警告
    warn: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      hover: false
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.$refs.input.click()
    },
    handleChange (e) {
      const files = e.target.files
      if (!files) return
      this.uploadFiles(files)
      this.$refs.input.value = null
    },
    onDrop (e) {
      this.hover = false
      if (this.disabled) return
      this.uploadFiles(e.dataTransfer.files)
    },
    handlePaste (e) {
      if (this.disabled) return
      if (this.paste) {
        this.uploadFiles(e.clipboardData.files)
      }
    },
    uploadFiles (files) {
      let fileList = Array.prototype.slice.call(files)
      if (!this.multiple) fileList = fileList.slice(0, 1)
      if (fileList.length > 0 && this.checkFiles(fileList)) {
        this.$emit('change', fileList)
      }
    },
    // 检查文件列表
    checkFiles (files) {
      const modifiers = this.getModifiers()
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        for (let j = 0; j < modifiers.length; j++) {
          const { check, message } = modifiers[j]
          if (!check(file)) {
            if (this.warn) {
              Message.warning(message)
            }
            this.$emit('error', { file, modifier: modifiers[j] })
            return false
          }
        }
      }
      return true
    },
    // 获取检查文件方法
    getModifiers () {
      const values = getBaseModifiers(this.ext)
      this.modifiers.forEach((value) => {
        if (value.name) {
          const index = values.findIndex(({ name }) => name && (name === value.name))
          if (index >= 0) values.splice(index, 1)
        }
        values.push(value)
      })
      return values.filter(({ disabled }) => !disabled)
    }
  }
}
</script>
