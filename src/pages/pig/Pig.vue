<template>
    <div>
        <pig-header></pig-header>
        <!-- <pig-echarts></pig-echarts> -->
        <pig-home></pig-home>
    </div>
</template>

<script>
import PigHeader from '@/components/AllHeader'
import PigHome from './components/PigHomeShow'

export default {
    name:'pig',
    components:{
        PigHeader,
        PigHome
    }
}
</script>

<style lang="stylus" scoped>

</style>

