# Drawer 抽屉

demo

::: demo

```HTML
<template>
  <vc-drawer ref="drawer" :direction="position"><div>点击了</div></vc-drawer>
  <button @click="drawerChange('left')">点击左边</button>
  <button @click="drawerChange('top')">点击上边</button>
  <button @click="drawerChange('right')">点击右边</button>
  <button @click="drawerChange('bottom')">点击下边</button>
</template>


<script>
export default {
  data(){
    return{
     position:null
    }
  },
  computed: {
    
  },
  mounted(){
   
  },
  methods: {
    drawerChange(txt){
      this.$refs.drawer.show()
      this.position = txt
    }
  },

}
</script>



```
:::
## API

| 属性    | 说明     | 类型   | 默认值 |
| ------- | -------- | -------- |-------- |
| direction   |   出现的位置 |  String |    left      |






