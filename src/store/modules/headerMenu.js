export default {
  namespaced: true,
  state: {
    burgerToggle: false,
  },
  getters: {
    burgerToggle: state => state.burgerToggle,
  },
  mutations: {
    // [HEADER_MENU_TOGGLE](state) {
    toggle(state) {
      state.burgerToggle = !state.burgerToggle;
    },
  },
};
