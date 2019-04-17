import Vue from 'vue';
import axios from 'axios';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registerServiceWorker';

axios.defaults.baseURL = 'http://localhost:5000/api';

if (localStorage.getItem('Live2TOKEN')) {
  axios.defaults.headers.common.Authorization = localStorage.getItem('Live2TOKEN');
} else {
  delete axios.defaults.headers.common.Authorization;
}
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
