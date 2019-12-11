<template>
  <div>
    <form action
          name="upload">
      <div class="upload-box">
        <div class="img-list"
             v-for="(item,index) of imgList"
             :key="index"
             v-show="imgList.length!=0">
          <div class="img-item"
               @mouseover="mouseOver(index)"
               @mouseout="mouseOut">
            <img v-if="item.file.type.indexOf('image') !== -1"
                 :src="item.file.src" />
            <div class="upload-icon"
                 v-show="index==activeNum">
              <i @click="fileDel(index)">×</i>
            </div>
          </div>
        </div>
        <div class="img-add"
             v-show="addState">
          <span>十</span>
          <input id="inpu"
                 name="files"
                 @change="fileChange($event)"
                 type="file"
                 ref="file"
                 accept="image/*" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getFileBase64 } from './util'
export default {
  name: 'vc-upload',
  props: {
    // 允许上传的图片个数
    limit: {
      type: Number,
      default: 9
    },
    // 允许上传的图片大小
    imgSize: {
      type: Number,
      default: 1024
    }
  },
  data () {
    return {
      imgList: [],
      addState: true,
      activeNum: null
    }
  },
  watch: {
    imgList () {
      if (this.imgList.length === this.limit) {
        this.addState = false
        console.log('上传已达到上限')
      } else {
        this.addState = true
      }
    }
  },
  methods: {
    fileChange (el) {
      // console.log(el)
      if (!el.target.files[0].size) return
      this.fileList(el.target)
      el.target.value = ''
    },
    fileList (fileList) {
      let files = fileList.files
      for (let i = 0; i < files.length; i++) {
        // 判断是否为文件夹
        if (files[i].type !== '') {
          this.fileAdd(files[i])
        } else {
          // 文件夹处理
          this.folders(fileList.items[i])
        }
      }
    },
    // 文件夹处理
    folders (files) {
      let _this = this
      // 判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry()
      }
      files.createReader().readEntries(function (file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i])
          } else {
            _this.folders(file[i])
          }
        }
      })
    },
    foldersAdd (entry) {
      let _this = this
      entry.file(function (file) {
        _this.fileAdd(file)
      })
    },
    fileAdd (file) {
      const size = Math.ceil(file.size / 1024)
      if (size <= this.imgSize) {
        getFileBase64(file).then(src => {
          file.src = src
          this.imgList.push({ file })
          // console.log(this.imgList)
          this.uploadImage()
        })
      } else {
        console.log('上传不能超过this.imgSize')
      }
    },
    fileDel (index) {
      this.imgList.splice(index, 1)
    },
    // 请求写在这里面
    uploadImage () {
      this.$emit('ajaxRequest')
      // console.log('请求写这里')
    },
    mouseOver (num) {
      this.activeNum = num
    },
    mouseOut (num) {
      this.activeNum = null
    }
  }
}
</script>
