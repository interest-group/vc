<template>
  <li class="vc-menu-item-group">
    <div class="vc-menu-item-group__title">
      <template v-if="title">{{title}}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'vc-menu-item-group',
  props: {
    title: String
  }
}
</script>
