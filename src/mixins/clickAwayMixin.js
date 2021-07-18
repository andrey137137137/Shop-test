import { createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('clickAway');

export default {
  methods: {
    ...mapMutations(['addItem']),
    checkRefArray(arr, target, cb = null, toUseIndex = false) {
      return arr.some((el, index) => {
        const elem = el.$el ? el.$el : el;
        const cond = target == elem;

        if (!cb) {
          return cond;
        }

        if (cond) {
          if (toUseIndex) {
            cb(index);
          } else {
            cb();
          }

          return true;
        }

        return false;
      });
    },
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
