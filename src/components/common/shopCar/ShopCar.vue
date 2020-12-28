<template>
  <div class="cart">
<!--    {{$store.state.SubShopDate}}-->
    <div class="box">
      <ul>
        <li v-for="(item,key) in res">
          <!--        {{key}}-->
          {{item.title}}
          <img :src="item.img" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import NavBar from "../navBar/NavBar";

  export default {
    name: "ShopCarBar",
    components: {
      NavBar
    },
    data() {
      return {
        res:{}
      }
    },
    created() {
      this.res = this.$store.state.SubShopDate
    },
    methods: {}
  }
</script>

<style scoped>
  .cart {
    background-color: #eeeeee;
    height: 200px;
    width: 95vw;
    border-radius: 5vw;
    margin: 0 auto;
  }

  .box img{
    width: 20vw;
    border-radius: 2vw;
  }
</style>
