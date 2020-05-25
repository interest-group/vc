<template>
  <v-container class="app">
    <v-header class="app-header">
      <div class="app-header__center">
        <router-link to="/">
          <img class="logo" alt="logo" src="./assets/logo.png" />
          <h1 class="title heading-middle">Vue Components</h1>
        </router-link>
        <ul class="nav">
          <li><router-link class="heading-small" :class="{active: isHomeActive}"  to="/">Home</router-link></li>
          <li><router-link class="heading-small" :class="{active: !isHomeActive}" :to="{name: '介绍'}">Components</router-link></li>
          <li><a class="heading-small" target="_blank" href="https://github.com/interest-group/vc">Github</a></li>
        </ul>
      </div>
    </v-header>
    <v-container class="app-container">
      <router-view></router-view>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'app',
  computed: {
    isHomeActive () {
      return this.$route.name === 'home'
    }
  }
}
</script>

<style scoped lang="scss">
.app {
  min-width: 800px;
  &-header {
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 1px 4px 0 rgba(213,218,224,0.5);
    &__center{
      margin: 0 auto;
      max-width: 1200px;
      box-sizing: border-box;
      height: 80px;
      background-color: #FFF;
      display: flex;
      align-items: center;
      padding: 10px 20px;
      & >  a {
        color: #333;
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 45px;
        cursor: pointer;
      }
      .logo {
        width: 45px;
      }
      .title {
        margin: 0 20px;
      }
      .nav {
        margin-left: auto;
        li {
          display: inline-block;
          padding: 0 20px;
          position: relative;
          list-style: none;
          margin-left: 20px;
          a {
            text-decoration: none;
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

            &.active {
              color: #5575c8;
              &:after {
                transform: scaleX(1);
              }
            }
          }
          &:hover a {
            color: #5575c8;
          }
        }
      }
    }
  }
  &-container {
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
