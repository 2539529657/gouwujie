<template>
  <div>
    <NavBar class="top-nav detail-item">
      <template v-slot:left>
        <span @click="goback">👈</span>
      </template>
      <template v-slot:center>
        <div v-for="(title,index) in titles"
             class="title" @click="clickTitle(index)"
             :class="{active:index == titleIndex}">
          {{title}}
        </div>
      </template>
    </NavBar>

    <!--    顶部轮播图-->
    <div class="main-item">
      <SwiperDetail :detailBanner="messageBanner"></SwiperDetail>
    </div>

    <!--    <detailList :detaildate="message"></detailList>-->

    <div class="itemList">
      <p>{{message}}</p>
    </div>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>

    <BtmShopBar>
      <template>
        <h1>wwdawdaw</h1>
      </template>
    </BtmShopBar>

  </div>

</template>

<script>

  import NavBar from "../../components/common/navBar/NavBar";
  import {getDetailMessage} from "../../network/detail";
  import SwiperDetail from '../../components/common/Swiper-detail'
  import detailList from '../../components/content/detail/DetailList'
  import BtmShopBar from "../../components/common/shopBar/BtmShopBar";

  export default {
    name: "detail",
    components: {
      NavBar,
      SwiperDetail,
      detailList,
      BtmShopBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        iid: null,
        message: null,
        messageBanner: null,
        titleIndex: 0,
      }
    },
    created() {
      this.iid = this.$route.params.iid
      this.getDetailMessage(this.iid)
      this.tabBarIsShow()
    },
    methods: {
      goback() {
        this.$router.back()
      },
      getDetailMessage(iid) {
        getDetailMessage(iid).then(res => {
          this.messageBanner = res.result.itemInfo.topImages
          this.message = res.result.itemInfo.desc
          // console.log(this.message)
        })
      },
      clickTitle(index) {
        this.titleIndex = index
        // console.log(index)
      },
      tabBarIsShow() {
        this.$store.commit('tabBarIsChange', false)
      }
    }
  }
</script>

<style scoped>

  .detail-item {
    font-weight: 600;
    height: 40px;
  }

  .title {
    float: left;
    width: 17vw;
  }

  .top-nav {
    position: fixed;
    background-color: var(--color-background);
  }

  .top-nav span {
    line-height: 40px;
    font-size: 1.3em;
  }

  .main-item {
    margin-top: 44px;
  }

  .active {
    color: red;
    font-weight: 800;
  }

  .itemList {
    width: 100vw;
  }
</style>
