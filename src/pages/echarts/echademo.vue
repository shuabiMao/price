<template>
<div>
    <pig-headera></pig-headera>
    <div class="title">月走势</div>
    <div id="myChart" class="echarts"></div>
     <div class="title">年走势</div>
    <div id="year" class="echarts"></div>
</div>
</template>
<script>
import PigHeadera from '@/components/AllHeader'
export default {
    name:'header',
    components:{
        PigHeadera
    },
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawZhexian()
    this.drawYear()
  },
  methods: {
    drawZhexian () {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
            myChart.setOption({
                xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
                yAxis: {
                    type: 'value'
            },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
        });
    },
    drawYear () {
        let myChartyear = this.$echarts.init(document.getElementById('year'))
        myChartyear.setOption({
                xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
                yAxis: {
                    type: 'value'
            },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
        });
    }
  }
}
</script>
<style lang="stylus" scoped>
.echarts
    width: 100%
    height: 300px
.title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
</style>

