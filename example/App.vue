<template>
  <vc-container class="app">
    <vc-header class="app-header">
      <img class="app-header-logo" alt="Vue logo" src="./assets/logo.png">
      <h1 class="app-header-title">VC - Vue Components</h1>
    </vc-header>
    <vc-container class="app-container">
      <vc-aside class="app-aside">
        <ul>
          <li v-for="(route, index) in routes" :key="index">
            <router-link :to="route.path">{{route.meta.name}}</router-link>
          </li>
        </ul>
      </vc-aside>
      <vc-main class="app-main">
        <router-view></router-view>
      </vc-main>
    </vc-container>
  </vc-container>
</template>

<script>
import { routes } from './router'
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      routes
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
      height: 60px;
      z-index: 1500;
      background-color: #FFF;
      display: flex;
      align-items: center;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      &-logo {
        margin-left: 20px;
        width: 20px;
      }
      &-title {
        margin: 0 20px;
        font-size: 20px;
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
    }
  }
</style>
