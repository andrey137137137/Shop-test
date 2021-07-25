import { createNamespacedHelpers } from 'vuex';
import { notOverrideMessage } from '@api';
const { mapMutations } = createNamespacedHelpers('clickAway');

export default {
  methods: {
    ...mapMutations({ addClickAwayHandle: 'addItem' }),
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
    clickAwayHandle(triggerIndex) {
      notOverrideMessage('HANDLE', triggerIndex);
      return false;
    },
    isClickedParent(target) {
      notOverrideMessage('PARENT', target);
      return false;
    },
  },
  created() {
    const { isClickedParent, reset } = this;

    this.addClickAwayHandle({
      isClickedParent,
      handle: this.clickAwayHandle,
      reset,
    });
  },
};
