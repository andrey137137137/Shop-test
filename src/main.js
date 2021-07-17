import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

Vue.config.productionTip = false;

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    clickAways: [],
  },
  getters: {
    clickAways: state => state.clickAways,
    resets: state => state.clickAways.map(item => item.reset),
  },
  commits: {
    [ADD_ITEM](state, payload) {
      state.clickAways.push(payload);
    },
    [REMOVE_ITEM](state) {
      const lastIndex = state.clickAways.length - 1;
      state.clickAways.splice(lastIndex, 1);
    },
  },
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
