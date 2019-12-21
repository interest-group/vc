<template>
  <div class="vc-collapse">
    <div class="vc-collapse-item"
         v-for="(item,index) in list"
         :key="index"
         @click="handleClick(item,index)">
      <p class="vc-collapse-h">{{item.title}}</p>
      <collapse-tansition>
        <div v-show="item.flag">
          <p class="vc-collapse-p">{{item.content}}</p>
          <p class="vc-collapse-p">{{item.content}}</p>
        </div>
      </collapse-tansition>
    </div>
  </div>
</template>
<script>
import collapseTansition from './elTransition'
export default {
  name: 'vc-collapse',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick (item, index) {
      this.list.forEach(el => {
        if (el.flag !== this.list[index].flag) {
          el.flag = false
        }
      })
      item.flag = !item.flag
    }
  },
  components: {
    collapseTansition
  }
}
</script>
