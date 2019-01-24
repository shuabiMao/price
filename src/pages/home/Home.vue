<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-test></home-test>
    </div>
</template>

<script>
import HomeHeader from '@/components/AllHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/Icons'
import HomeTest from './components/HomeTest'
export default {
    name:'home',
    components:{
        HomeHeader,HomeSwiper,HomeIcons,HomeTest
    }
}
</script>

<style>

</style>
