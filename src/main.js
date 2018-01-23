import Vue from 'vue';
import App from './App.vue';

import Loading from './components/loading';   //默认情况下找的是index文件
Vue.use(Loading);   //必须有install

new Vue({
  el: '#app',
  render: h => h(App)
})
