<template>
  <div class="v-dm-item__wrapper" :class="classes" v-if="items.length">
    <div v-for="(item, index) in items" :key="index" :class="getClasses(item)">
      <template v-if="item.type !== 'line'">
        <u-icon v-if="item.icon" :name="item.icon" scene="none" @click="handleClick($event, item)"></u-icon>
        <div class="v-dm-item__text" @click="handleClick($event, item)">{{item.label}}</div>
        <u-icon v-if="item.rightIcon" :type="item.rightIcon" scene="action" @click="iconClick($event, item)"></u-icon>
        <template v-if="item.items && item.items.length">
          <u-icon type="chevron-right" scene="none"></u-icon>
          <drop-menu-items :items="item.items" :invert="invert" @click="handleClick" @iconClick="iconClick"></drop-menu-items>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
import UIcon from '../icon'

export default {
  name: 'drop-menu-items',
  components: {
    UIcon
  },
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    invert: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    classes () {
      return {
        'v-dm-items__wrapper-icon': this.items.some(({ icon }) => icon),
        'v-dm-items__wrapper-invert': this.invert
      }
    }
  },
  watch: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
    // 事件传递
    handleClick (...arg) {
      this.$emit('click', ...arg)
    },
    iconClick (...arg) {
      this.$emit('iconClick', ...arg)
    },
    getClasses (item) {
      if (item.type === 'line') {
        return 'v-dm-item__line'
      }
      return [
        'v-dm-item',
        {
          'v-dm-item__skip': item.skip,
          'v-dm-item__disabled': item.disabled,
          'v-dm-item__available': !item.skip && !item.disabled,
          'v-dm-item__active': item.active,
          'v-dm-item__icon': item.icon
        },
        item.className
      ]
    }
  }
}
</script>
