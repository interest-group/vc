<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <vc-button></vc-button>
    <hr>
    <!--<vc-container width="500px" height="400px">-->
      <!--<vc-header style="border: 1px solid yellow">-->
        <!--<p>vc-header</p>-->
      <!--</vc-header>-->
      <!--<vc-main>-->
        <!--<vc-aside style="border: 1px solid red">-->
          <!--<p>vc-aside</p>-->
        <!--</vc-aside>-->
        <!--<vc-main style="border: 1px solid blue">-->
          <!--<p>vc-main</p>-->
        <!--</vc-main>-->
      <!--</vc-main>-->
      <!--<vc-footer style="border: 1px solid green">-->
        <!--<p>vc-footer</p>-->
      <!--</vc-footer>-->
    <!--</vc-container>-->
    <hr>
    <!-- <button></button> -->
    <!--<bb />-->
    <layout></layout>
  </div>
</template>

<script>
// import bb from './docs/bb.md'
import layout from './docs/layout.md'
export default {
  name: 'app',
  components: {
    // bb,
    layout
  }
}
</script>

<style lang="scss">
  @import './assets/md.scss';
</style>
