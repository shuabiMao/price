<template>
    <div class="header">
        <div class="header-left">位置</div>
        <div class="hedaer-input">price_global</div>
        <div class="header-right">城市</div>
    </div>
</template>
<script>
export default {
    name:'home-header'
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
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
        
</style>
