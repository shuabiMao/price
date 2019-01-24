<template>
  <div class="wriper">
    <!-- wiper是为了解决用户抖动，也就是说加载慢的用户提前你把轮播图的高度留出来-->
    <!-- 下面的-if是为了数据从第四张图开始渲染 -->
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id" >
      <img class="swiper-img"  :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: "home-swiper",
    // props:{
    //   swiperlist: Array
    // },
    data () {
      return{
        swiperList:[
          {
            id: '0001',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
          },{
            id: '0002',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/de/f141c53c57475f02.jpg_750x200_4ca8370f.jpg'
          }
        ],
         swiperOption: {
            pagination: '.swiper-pagination',
            loop: true
           }
         }
      }
    }
</script>
<!-- 长比宽是padding-bottom-->
<!-- 下面三个箭头样式穿透,带有那个名称的不受scoped控制 -->
<style lang="stylus" scoped>
  .wriper >>>  .swiper-pagination-bullet-active
    background : #fff !important
  .wriper
     overflow : hidden
     width : 100%
     .swiper-img
        width : 100%
</style>
