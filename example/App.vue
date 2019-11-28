<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <vc-button></vc-button>
    <vc-container width="500px">
      <vc-header>
        <div style="background: red">asdsadsadsad</div>
      </vc-header>
      
    </vc-container>

    <!-- <button></button> -->
    <bb />
  </div>
</template>

<script>
import bb from './docs/bb.md'
export default {
  name: 'app',
  components: {
    bb
  }
}
</script>

<style lang="scss">
  @import './assets/md.scss';
</style>
