export default {
  namespaced: true,
  state: {
    triggers: [],
  },
  getters: {
    triggers: state => state.triggers,
    resets: state => state.triggers.map(item => item.reset),
  },
  mutations: {
    // [CLICK_AWAY_ADD_ITEM](state, payload) {
    addItem(state, payload) {
      state.triggers.push(payload);
    },
    // [CLICK_AWAY_REMOVE_ITEM](state) {
    removeItem(state) {
      const lastIndex = state.triggers.length - 1;
      state.triggers.splice(lastIndex, 1);
    },
  },
};
