<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>购物街</template>
    </NavBar>
    <!--    轮播图-->
    <Swiper :banner="bannerList"/>

    <!--    <推荐></推荐>-->
    <TabControl :titles="titles" @tabClick="tabClick"/>

    <GoodsList :goods="goods[currentType].list"/>

  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import Swiper from "components/common/Swiper";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getHomeMultidata, getHomeGoods} from "@/network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper,
      TabControl,
      GoodsList
    },
    data() {
      return {
        // result: null,
        bannerList: null,
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop'
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      // console.log(this.goods)
      this.tabBarIsShow()
    },
    methods: {


      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res)
          this.bannerList = res.data.banner.list
        })
      },
      getHomeGoods(type) {

        const page = this.goods[type].page + 1

        getHomeGoods(type, page).then(res => {

          // this.goods[type].list.push = res.data.list

          this.goods[type].list.push(...res.data.list)
        })
      },

      tabClick(index) {
        this.currentType = ['pop', 'new', 'sell'][index]
        console.log(index)
      },

      tabBarIsShow(){
        this.$store.commit('tabBarIsChange',true)
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
  }

</style>
