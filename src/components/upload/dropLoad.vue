<template>
  <div class="upload-drop">
    <div class="upload-content">
      <div class="drag-area"
           @dragover.prevent="fileDragover"
           @drop.prevent="fileDrop">
        <div class="upload-tips">
          <span>将文件拖拽至此，或</span>
          <label for="fileInput">点此上传</label>
        </div>
      </div>
    </div>
    <div class="upload-footer">
      <input type="file"
             id="fileInput"
             @change="chooseUploadFile"
             style="display: none;">
      <!-- <label for="fileInput" v-if="fileName" style="color: #11A8FF; cursor: pointer">选择文件</label> -->
      <div :class="['file-name',activeNum==index ?'active' : '']"
           v-for="(item,index) in fileName"
           :key="index"
           @mouseover="mouseOver(index)"
           @mouseout="mouseOut">
        <p class="file-txt">{{item.file.name}}</p>
        <i class='file-icon'
           @click="deleteChange(index)">{{activeNum==index ? 'X' : '√'}}</i>
      </div>
      <!-- <button @click="uploadOk">提交</button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'vc-dropload',
  props: {
    maxfileSize: {
      type: Number,
      default: 2 * 1024 * 1024
    }
  },
  data () {
    return {
      fileName: [],
      activeNum: null
    }
  },
  methods: {
    mouseOver (index) {
      this.activeNum = index
    },
    mouseOut () {
      this.activeNum = null
    },
    // 点击上传
    chooseUploadFile (e) {
      const file = e.target.files.item(0)
      if (!file) return
      if (file.size > this.maxfileSize) {
        console.log('文件大小不能超过2M!')
        return
      }
      this.fileName.push({ file })
      this.uploadOk()
      // 清空，防止上传后再上传没有反应
      e.target.value = ''
    },
    // 拖拽上传
    fileDragover (e) {
      // console.log("取消默认事件")
    },
    fileDrop (e) {
      const file = e.dataTransfer.files[0] // 获取到第一个上传的文件对象
      if (!file) return
      if (file.size > this.maxfileSize) {
        console.log('文件大小不能超过2M')
        return
      }
      this.fileName.push({ file })
      this.uploadOk()
      // console.log(this.fileName)
    },
    // 提交  如果将所有文件上传后在提交 需要加一个 提交按钮 并执行下面函数  如每次上传都请求接口 在fileDrop chooseUploadFile函数执行下面的函数
    uploadOk () {
      this.$emit('fileImg', this.fileName)
      // if (this.fileName &&this.fileName.length >0){
      //   return alert('请选择要上传的文件')
      // }
      // let data = new FormData()
      // data.append('upfile', this.batchFile)
      // ajax
    },
    deleteChange (num) {
      if (this.activeNum === num) {
        this.fileName.splice(num, 1)
      }
    }
  }
}
</script>
