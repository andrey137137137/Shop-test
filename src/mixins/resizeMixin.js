import { createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('resize');

export default {
  methods: {
    ...mapMutations({ addResizeHandle: 'addHandle' }),
    resizeHandle() {
      console.log('NOT OVERRIDE RESIZE HANDLE');
    },
  },
  created() {
    this.addResizeHandle(this.resizeHandle);
  },
};
