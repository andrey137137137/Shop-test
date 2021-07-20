export default {
  namespaced: true,
  state: {
    handles: [],
  },
  getters: {
    handles: () => state.handles,
  },
  mutations: {
    addHandle(state, payload) {
      state.handles.push(payload);
    },
  },
};
