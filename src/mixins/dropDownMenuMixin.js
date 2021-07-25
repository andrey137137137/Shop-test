import { notOverrideMessage } from '@api';
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
    areSubItems(items) {
      notOverrideMessage('sub items', items);
      return false;
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
    isClickedParent(target) {
      return this.checkRefArray(this.$refs.subLists, target);
    },
    clickAwayHandle(triggerIndex, target, context) {
      if (context.checkChildren(triggerIndex, target, 2)) {
        return true;
      }

      // if (
      //   this.isMobileTransitionEffect &&
      //   this.checkRefArray(this.$refs.items, target, this.setSelectedItem, true)
      // ) {
      //   return true;
      // }

      return this.checkRefArray(
        this.$refs.arrows,
        target,
        this.setSelectedItem,
        true,
      );
    },
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
