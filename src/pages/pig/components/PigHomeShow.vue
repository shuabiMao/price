<template>
    <div class="pighome">
        <router-link to="/pigecharts">
        <div class="title">
            走势图
        </div>
        <div class="item-img-wrapper border-bottom">
          <img class="item-img" 
          src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg">
      </div>
        </router-link>

        <router-link to="/pigbuy">
      <div class="title">
          商家交易(仅限求购)
      </div>
      <div class="item-img-wrapper border-bottom">
          <img class="item-img" 
          src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg">
      </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'pighome',
    methods:{
        // goPigEc () {
        //     this.$router.push('/pigecharts')
        // }
    }
}
</script>
<style lang="stylus" scoped>
.pighome
    width: 100%
    overflow: hidden
    .title
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        .item-img
            width: 100%
</style>
