<template>
  <vc-container class="app">
    <vc-header class="app-header">
      <div class="app-header__inner">
        <img class="app-header-logo" alt="Vue logo" src="./assets/logo.png">
        <h1 class="app-header-title heading-middle">Vue Components</h1>
        <ul class="app-header-nav">
          <li><router-link class="heading-small" to="/">Home</router-link></li>
          <li><router-link class="heading-small" to="/">Components</router-link></li>
          <li><a class="heading-small" href="/">Github</a></li>
        </ul>
      </div>
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
      justify-content: center;
      transition: all .25s ease;

      &__inner {
        width: 100%;
        max-width: 1400px;
        height: 60px;
        display: flex;
        align-items: center;
      }

      &-nav {
        margin-left: auto;

        li {
          display: inline-block;
          padding: 0 20px;

          position: relative;

          list-style: none;

          &:not(:last-child) {
            margin-right: 20px;
          }

          &:hover {
            a {
              color: #5575c8;
            }
            a:after {
              transform: scaleX(1);
            }
          }

          a {
            position: relative;
            color: lighten(#5575c8, 10%);

            &:after {
              content: '';
              display: inline-block;
              width: 100%;
              height: 3px;
              position: absolute;
              top: 130%;
              left: 0;
              background-color: #5575c8;
              transform-origin: 50%;
              transform: scaleX(0);
              transition: all .2s .1s ease-in-out;
            }
          }
        }
      }

      &-logo {
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
