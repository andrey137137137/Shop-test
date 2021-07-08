import isGadgetMixin from '@mxn/isGadgetMixin';

export default {
  mixins: [isGadgetMixin],
  methods: {
    reset() {},
    handle(target) {
      console.log(target);
      return false;
    },
    onClick(e) {
      if (!this.isPad()) {
        this.reset();
        return;
      }

      console.log(e.target);

      if (this.handle(e.target)) {
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
