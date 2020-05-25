<template>
  <div class="component-page">
    <v-scrollbar class="component-page__aside" autoshow>
      <v-menu>
        <h2 class="title">开发指南</h2>
        <template v-for="route in guide">
          <v-menu-item :name="route.name" :key="route.meta.name" :to="route">{{route.meta.name}}</v-menu-item>
        </template>
        <h2 class="title">组件</h2>
        <v-menu-group v-for="(group, index) in menus" :key="index" :title="group.module">
            <v-menu-item v-for="(route, i) in group.children" :name="route.name"
                         :key="i" :to="route">{{route.meta.name}}</v-menu-item>
        </v-menu-group>
      </v-menu>
    </v-scrollbar>
    <v-content class="component-page__body">
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import guide from '../router/guide'
import components from '../router/components'

const menus = []

components.forEach(route => {
  const { module } = route.meta
  let parent = menus.find(d => d.module === module)
  if (!parent) {
    parent = { module, children: [] }
    menus.push(parent)
  }
  parent.children.push(route)
})

export default {
  name: 'component-page',
  data () {
    return {
      guide,
      menus
    }
  }
}
</script>

<style lang="scss">
.component-page {
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  &__aside {
    background-color: #fafafa;
    position: fixed !important;
    height: auto !important;
    width: 230px !important;
    top: 80px;
    bottom: 0;
    .title {
      padding: 15px 20px;
      font-weight: bold;
    }
  }
  &__body {
    margin-left: 230px;
    padding: 50px 30px 90px 40px;
    overflow: auto;
  }
}
</style>
