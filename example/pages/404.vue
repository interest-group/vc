<template>
  <div class="not-found__page">
    <img src="../assets/svg/404_page.svg" alt="">
    <p class="paragraph"></p>
  </div>
</template>

<script>
export default {
  name: 'not-found'
}
</script>

<style lang="scss" scoped>
.not-found__page {
  position: relative;
  height: 100%;
  min-height: 400px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
  }
}
</style>
