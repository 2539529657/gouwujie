<template>
  <div>
    <GoodsListItem v-for="item in goods" :goods-item="item"></GoodsListItem>
  </div>
</template>

<script>

  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

</style>
