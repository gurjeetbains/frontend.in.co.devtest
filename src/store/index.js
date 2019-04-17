import Vue from 'vue';
import Vuex from 'vuex';
import userStore from './modules/userStore';
import adsStore from './modules/adsStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userStore,
    adsStore,
  },
});
