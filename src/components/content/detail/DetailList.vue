<template>
  <div>
    {{detaildate.itemInfo.desc}}
    <!--        <p>{{deatildate.defaultPrice}}</p>-->
    <p>{{detaildate.columns}}</p>
  </div>
</template>

<script>

  import DetailLstItem from "./DetailLstItem";

  export default {
    name: "DetailList",
    components: {
      DetailLstItem
    },
    props: {
      detaildate: {
        type:Object
      }
    },
  }
</script>

<style scoped>

</style>
