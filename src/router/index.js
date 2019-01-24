import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Home'
import PigEcharts from '@/pages/echarts/echademo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Home',
      component: Home
    },
    // 下面是异步组件
    {
      path:'/pig',
      name:'Pig',
      component: () => import ('@/pages/pig/Pig')
    },
    {
      path:'/pigecharts',
      name: 'PigEcharts',
      component: PigEcharts
    },
    {
      path:'/pigbuy',
      name: 'PigBuy',
      component: () => import ('@/pages/pig/pigBuy/pigBuy')
    }
  ]
})
