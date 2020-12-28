<template>
  <div class="shopcar">
    <slot name="randio"></slot>
      <slot name="text"></slot>
      <slot name="btn"></slot>
  </div>
</template>

<script>
  export default {
    name: "ShopCarTools"
  }
</script>

<style scoped>
  .shopcar {
    width: 100vw;
    height: 6vh;
    position: fixed;
    margin-top: 44px;
    background: #f6f7f7;
    bottom: 49px;
    /*border-top: 2px solid #ccc;*/
    box-shadow:0px 4px 7px 2px;
    line-height: 6vh;
    border-bottom: 1px solid #ccc;
  }

  .shopcar-left {
    text-align: center;
    width: 30vw;
    float: left;
  }

  .shopcar-left input {
    border-radius: 50%;
  }

  .shopcar-center {
    width: 30vw;
    text-align: center;
    float: left;
  }

  .shopcar-right {
    background: #FF5100;
    color: white;
    font-weight: 500;
    text-align: center;
    width: 20vw;
    float: right;
  }

</style>
