<template>

  <div>
    <NavBar class="home-nav">
      <!--头-->
      <template v-slot:center>
        购物车车(<!--{{$store.state.num}}-->)
      </template>
    </NavBar>

    <div class="shopCarBox">
      <ShopCar></ShopCar>
    </div>

    <ShopCarTools>
      <template v-slot:randio>
        <input type="checkbox">
        <span>全选</span>
      </template>
      <template v-slot:text>
        合计:
      </template>
      <template v-slot:btn>
        <div class="right">
          <p>去结算()</p>
        </div>
      </template>
    </ShopCarTools>

  </div>

</template>

<script>

  import NavBar from "../../components/common/navBar/NavBar";
  import ShopCarTools from "../../components/common/shopCar/ShopCarTools";
  import ShopCar from "../../components/common/shopCar/ShopCar";

  export default {
    name: "ShopCart",
    components: {
      NavBar, ShopCarTools, ShopCar
    }
  }
</script>

<style scoped>
  .home-nav {
    height: 44px;
    background-color: white;
    text-align: center;
  }

  .shopCarBox {
    margin-top: 44px;
  }
</style>
