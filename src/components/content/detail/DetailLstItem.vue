<template>
  <div>
    <ul>
      <li>{{detaildateItem.detailInfo.desc}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DetailLstItem",
    props: {
      detaildateItem: {
        type:Object
      }
    }
  }
</script>

<style scoped>

</style>
