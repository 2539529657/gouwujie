<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in detailBanner">
        <img :src="item" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    props: {
      detailBanner: {
        type: Array
      },
    },
    updated() {
      new Swiper('.swiper-container', {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    computed: {}
  }
</script>

<style scoped>
  .swiper-container {
    /*width: 100%;*/
    /*height:300px*/
    margin-top: 44px;
  }

  .swiper-container img {
    width: 100%;
    height: 150%;
  }

  .swiper-container {
    --swiper-theme-color: #ff6600;
    height: 304px;
  }
</style>
