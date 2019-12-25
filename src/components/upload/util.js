export function getFileBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      // file.src = this.result;  //base64
      resolve(this.result)
    }
  })
}
// 读取文件
export function readFile (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadstart = e => {
      // 正在读取时候的加载 可以这里写
      // this.uploadLoading = true
    }
    // 读取进度条
    // reader.onprogress = e => {
    //   this.progressPercent = Math.round(e.loaded / e.total * 100)
    //   console.log(this.progressPercent)
    // }
    reader.onerror = e => {
      let txt = '文件读取出错'
      reject(txt)
    }
    reader.onload = e => {
      console.log('文件读取成功')
      resolve(e.target.result)
      // this.uploadLoading = false
    }
  })
}
