export default {
  namespaced: true,
  state: {
    handles: [],
  },
  getters: {
    handles: state => state.handles,
  },
  mutations: {
    addHandle(state, payload) {
      state.handles.push(payload);
    },
  },
};
