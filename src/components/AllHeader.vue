<template>
    <div class="header">
        <div class="header-left" @click="goback">返回</div>
        <div class="hedaer-input">price_global</div>
        <router-link to="./">
        <div class="header-right">首页</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'home-header',
    methods:{
      goback () {
          this.$router.go(-1)
      }
    }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      text-align: center
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
        
</style>
