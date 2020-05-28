<template>
  <li class="v-menu-group">
    <div class="v-menu-group__title"><slot name="title">{{title}}</slot></div>
    <ul class="v-menu-group__content"><slot></slot></ul>
  </li>
</template>

<script>
export default {
  name: 'v-menu-group',
  props: {
    title: {
      type: String
    }
  }
}
</script>
