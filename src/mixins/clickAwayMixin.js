import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['addItem']),
    reset() {},
    clickAwayHandle(target) {
      console.log('NOT OVERRIDE HANDLE FOR: ' + target);
      return false;
    },
    isClickedParent(target) {
      console.log('NOT OVERRIDE PARENT FOR: ' + target);
      return false;
    },
  },
  created() {
    const { isClickedParent, reset } = this;

    this.addItem({
      isClickedParent,
      handle: this.clickAwayHandle,
      reset,
    });
  },
};
