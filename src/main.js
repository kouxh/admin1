import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'
//请求管理器
import axios from 'axios'
// cookie
import cookie from 'js-cookie'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 引入 api
import api from './api/api.js'
// 自定义全局css样式
import './assets/css/base.css'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.prototype.$api = api
Vue.prototype.$axios = axios
Vue.prototype.$cookie = cookie
Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
