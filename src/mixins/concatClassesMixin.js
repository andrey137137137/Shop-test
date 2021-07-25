export default {
  methods: {
    areClassesAsString(classes) {
      return typeof classes === 'string';
    },
    areClasses(classes) {
      if (this.areClassesAsString) {
        return classes;
      }

      if (typeof classes === 'object') {
        for (let key in classes) {
          if (Object.prototype.hasOwnProperty.call(classes, key)) {
            return true;
          }
        }
      }

      return false;
    },
    getClassesAsObject(classes) {
      if (!this.areClasses(classes)) {
        return {};
      }

      if (!this.areClassesAsString(classes)) {
        return classes;
      }

      const resultClasses = {};

      classes.split(' ').forEach(function(item) {
        resultClasses[item] = true;
      });

      return resultClasses;
    },
  },
};
