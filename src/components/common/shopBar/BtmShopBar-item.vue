<template>
  <div>
      <slot name="shopBar-left"></slot>
    <div>
      <slot name="shopBar-left-text"></slot>
    </div>
      <slot name="shopBar-right"></slot>
  </div>
</template>

<script>
  export default {
    name: "BtmShopBar-item"
  }
</script>

<style scoped>

</style>
