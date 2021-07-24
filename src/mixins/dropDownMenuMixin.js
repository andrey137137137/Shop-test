import isGadgetMixin from '@mxn/isGadgetMixin';
import clickAwayMixin from '@mxn/clickAwayMixin';
import resizeMixin from '@mxn/resizeMixin';

export default {
  mixins: [isGadgetMixin, clickAwayMixin, resizeMixin],
  data() {
    return {
      menuItems: [],
      selectedItems: [],
      selectedItemsCount: 0,
      isMobileTransitionEffect: false,
      transitionProperty: 'height, margin, padding',
      transitionDuration: '1s',
    };
  },
  methods: {
    notOverrideMessage(title, value = null) {
      const suffix = value ? ' FOR: ' + value : '';
      console.log('NOT OVERRIDE ' + title.upperCase() + suffix);
    },
    areSubItems(items) {
      this.notOverrideMessage('sub items', items);
      return false;
    },
    getSubTitle(parentTitle, index) {
      this.notOverrideMessage('sub items', { parentTitle, index });
      return '';
    },
    itemHoverClass(index) {
      // return { 'menu-item--hover': this.selectedItems[index] };
      return { _hover: this.selectedItems[index] };
    },
    isSelectedOnMobile(index) {
      if (!this.isMobileTransitionEffect) {
        return true;
      }

      if (this.selectedItems[index] && this.isGadget()) {
        return true;
      }

      return false;
    },
    enter(element) {
      element.style.width = getComputedStyle(element).width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      // Trigger the animation.
      // We use `requestAnimationFrame` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    leave(element) {
      const height = getComputedStyle(element).height;

      element.style.height = height;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
    reset() {
      if (!this.isMobileTransitionEffect && this.selectedItemsCount > 0) {
        this.selectedItems = this.selectedItems.map(() => false);
        this.selectedItemsCount = 0;
      }
    },
    setSelectedItem(index) {
      this.$set(this.selectedItems, index, !this.selectedItems[index]);

      if (this.selectedItems[index]) {
        this.selectedItemsCount++;
      } else {
        this.selectedItemsCount--;
      }

      if (this.selectedItemsCount < 0) {
        this.selectedItemsCount = 0;
      }
    },
    // isClickedParent(target) {
    //   return this.checkRefArray(this.$refs.subLists, target);
    // },
    // clickAwayHandle(triggerIndex, target, context) {
    //   if (context.checkChildren(triggerIndex, target, 2)) {
    //     return true;
    //   }

    //   return this.checkRefArray(
    //     this.$refs.columns,
    //     target,
    //     this.setSelectedItem,
    //     true,
    //   );
    // },
    resizeHandle() {
      console.log(window.innerWidth);
      if (this.isMobile()) {
        this.isMobileTransitionEffect = true;
      } else {
        this.isMobileTransitionEffect = false;
      }
    },
  },
  created() {
    this.menuItems.forEach(() => {
      this.selectedItems.push(false);
    });
  },
};
