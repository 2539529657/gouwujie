<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :class="{active:index == currentIndex}"
         @click="clickItem(index)" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      clickItem(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    },
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    background: var(--color-background);
    position: sticky;
    top: 44px;
  }

  .tab-control-item {
    font-weight: 600;
    flex: 1;
    line-height: 40px;
    height: 40px;
    text-align: center;
  }

  .active span {
    color: var(--color-tint);
    border-bottom: var(--color-tint) 3px solid;
  }
</style>
