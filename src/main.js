// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import echarts from 'echarts'
import ElementUI from 'element-ui';


// 导入css
// 下面的css是为了统一浏览器的样式
import './assets/styles/reset.css'
// 下面的是为了1物理像素边框
import './assets/styles/border.css'
// 导入iconfon.css
import './assets/styles/iconfont.css'
// 轮播CSS
import 'swiper/dist/css/swiper.css'
// 导入饿了吗css
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.prototype.$echarts = echarts 
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
