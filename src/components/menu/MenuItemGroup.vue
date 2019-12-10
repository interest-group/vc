<template>
  <li class="vc-menu-group">
    <div class="vc-menu-group-title"><slot name="title">{{title}}</slot></div>
    <ul><slot></slot></ul>
  </li>
</template>

<script>
export default {
  name: 'vc-menu-group',
  props: {
    title: {
      type: String
    }
  }
}
</script>
