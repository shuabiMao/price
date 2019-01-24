<template>
    <div>
       <buy-header></buy-header>
       <buy-er></buy-er>
    </div>
</template>
<script>
import BuyHeader from '@/components/AllHeader'
import BuyEr from './components/Buyer'
export default {
    name:'pigbuy',
    components:{
        BuyHeader,BuyEr
    }
}
</script>
<style lang="stylus" scoped>

</style>
