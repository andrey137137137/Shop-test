import concatClassesMixin from '@mxn/concatClassesMixin';

export default {
  mixins: [concatClassesMixin],
  props: {
    iconClass: {
      type: String,
      default: '',
    },
    classes: {
      default: '',
    },
  },
  computed: {
    compClasses() {
      const iconClasses = {};

      if (this.iconClass) {
        iconClasses.icon = true;
        iconClasses[`icon-${this.iconClass}`] = true;
      }

      return {
        ...iconClasses,
        ...this.getClassesAsObject(this.classes),
      };
    },
  },
};
