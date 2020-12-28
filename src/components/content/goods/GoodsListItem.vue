<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="">
    <div>
      {{goodsItem.title}}
      <p>&nbsp;</p>
      <p>价格:💰{{goodsItem.price}}</p>
      收藏:{{goodsItem.cfav}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default: {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    height: 50vh;
    width: 50vw;
    display: inline-block;
    padding: 5px;
  }

  .goods-item > img {
    width: 100%;
  }
</style>
