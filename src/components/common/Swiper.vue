<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    props: {
      banner: {
        type: Array
      }
    },
    updated() {
      new Swiper('.swiper-container', {
        autoplay: true
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
    width: 100%
  }
</style>
