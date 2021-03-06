import Vue from 'vue';
import Vuex from 'vuex';
import clickAway from './modules/clickAway';
import resize from './modules/resize';
import headerMenu from './modules/headerMenu';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    clickAway,
    resize,
    headerMenu,
  },
});
