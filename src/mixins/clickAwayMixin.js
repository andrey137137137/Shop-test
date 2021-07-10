import isGadgetMixin from '@mxn/isGadgetMixin';

export default {
  mixins: [isGadgetMixin],
  methods: {
    reset() {},
    clickAwayHandle(target) {
      console.log('NOT OVERRIDE HANDLE FOR: ' + target);
      return false;
    },
    isClickedParent(target) {
      console.log('NOT OVERRIDE PARENT FOR: ' + target);
      return false;
    },
    checkChildren(target, deep) {
      for (
        let curDeep = 0, child = target;
        curDeep <= deep;
        curDeep++, child = child.parentNode
      ) {
        if (!child) {
          return false;
        }

        if (this.isClickedParent(child)) {
          return true;
        }
      }

      return false;
    },
    onClick(e) {
      if (!this.isPad()) {
        this.reset();
        return;
      }

      console.log(e.target);

      if (this.clickAwayHandle(e.target)) {
        return;
      }

      this.reset();
    },
  },
  mounted() {
    document.addEventListener('click', this.onClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick);
  },
};
