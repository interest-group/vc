<template>
  <div class="home-page clear">
    <div class="desc">
      <h3 class="heading-super">中后台快速开发的组件库</h3>
      <p class="paragraph">VC, Vue Components 是一套基于 Vue 开发的组件库，集成大量常用的UI组件，帮助开发者快速完成PC端的中后台产品开发</p>
      <vc-button size="small">快速开始</vc-button>
      <vc-button type="info">快速开始</vc-button>
      <vc-button type="success">快速开始</vc-button>
      <vc-button type="warning" size="middle">快速开始</vc-button>
      <vc-button type="error" size="large">
        快速开始
        <vc-icon name=arrow-right></vc-icon>
      </vc-button>
    </div>
    <img src="../assets/svg/home-bg.svg" alt="">
  </div>
</template>
<script>
export default {
  name: 'home-page'
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 90%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 30px 0;

  position: relative;

  .desc {
    width: 36%;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  img {
    float: right;
    width: 60%;
  }
}
</style>
