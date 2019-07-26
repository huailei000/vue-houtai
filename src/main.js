import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import md5 from 'js-md5';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/utils/global';//全局
// 控制路由表的js文件
import '@/permission.js';

Vue.config.productionTip = false;
axios.defaults.baseURL = '/api';
Vue.prototype.$axios = axios;
Vue.prototype.$md5 = md5;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
