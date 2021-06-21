export default {
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
    areClassesAsString() {
      return typeof this.classes === 'string';
    },
    areClasses() {
      if (this.areClassesAsString) {
        return this.classes;
      }

      if (typeof this.classes === 'object') {
        for (let key in this.classes) {
          if (Object.prototype.hasOwnProperty.call(this.classes, key)) {
            return true;
          }
        }
      }

      return false;
    },
    compClasses() {
      const resultClasses = {};

      if (this.iconClass) {
        resultClasses.icon = true;
        resultClasses[`icon-${this.iconClass}`] = true;
      }

      if (this.areClasses) {
        if (this.areClassesAsString) {
          this.classes.split(' ').forEach(function(item) {
            resultClasses[item] = true;
          });
        }
      }

      return resultClasses;
    },
  },
};
