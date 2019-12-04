<template>
  <vc-container class="app">
    <vc-header class="app-header">
      <img class="app-header-logo" alt="Vue logo" src="./assets/logo.png">
      <h1 class="app-header-title heading-middle">Vue Components</h1>
    </vc-header>
    <vc-container class="app-container">
      <router-view></router-view>
    </vc-container>
  </vc-container>
</template>

<script>
import { componentRoutes } from './router'
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      routes: componentRoutes
    }
  }
}
</script>

<style lang="scss">
  html,body{
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }
</style>

<style scoped="" lang="scss">
  .app {
    height: 100%;
    &-header {
      height: 80px;
      z-index: 1500;
      background-color: #FFF;
      display: flex;
      align-items: center;
      transition: all .25s ease;

      &-logo {
        margin-left: 40px;
        width: 60px;
      }
      &-title {
        margin: 0 20px;
      }
    }
    &-container {
      height: calc(100% - 60px);
    }
    &-aside {
      overflow-x: hidden;
      width: 150px;
    }
    &-main{
      overflow-x: hidden;
      padding: 20px;
    }
  }
</style>
