import { createNamespacedHelpers } from 'vuex';
import { notOverrideMessage } from '@api';
const { mapMutations } = createNamespacedHelpers('resize');

export default {
  methods: {
    ...mapMutations({ addResizeHandle: 'addHandle' }),
    resizeHandle() {
      notOverrideMessage('RESIZE HANDLE');
    },
  },
  created() {
    this.addResizeHandle(this.resizeHandle);
  },
};
