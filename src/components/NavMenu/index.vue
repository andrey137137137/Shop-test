<template lang="pug">
ul(:class='listClasses')
  li(
    v-for='(item, index) in items',
    :class='getItemClasses(index)',
    ref='items'
  )
    LinkTag(v-if='isHeaderMenu', :class='linkClasses') {{ item.title }}
    BtnTag(
      v-if='areSubItems(item.items)',
      :iconClass='compBtnIconClass',
      :classes='btnClasses',
      ref='arrows'
    ) {{ getBtnText(item.title) }}
    TransitionSlide
      DropDownMenu(
        v-if='areSubItems(item.items)',
        v-show='isSelectedOnMobile(index)',
        :key='"subList-" + index',
        :items='item.items',
        :headerMenuTitle='getItemTitle(index)',
        :listClasses='subListClasses',
        :itemClasses='subItemClasses',
        :linkClasses='subLinkClasses',
        ref='subLists'
      )
</template>

<script>
import concatClassesMixin from '@mxn/concatClassesMixin';
import isGadgetMixin from '@mxn/isGadgetMixin';
import clickAwayMixin from '@mxn/clickAwayMixin';
import resizeMixin from '@mxn/resizeMixin';
import LinkTag from '@tags/LinkTag';
import BtnTag from '@tags/BtnTag';
import TransitionSlide from '@cmp/TransitionSlide';
import DropDownMenu from './DropDownMenu';

export default {
  name: 'NavMenu',
  mixins: [concatClassesMixin, isGadgetMixin, clickAwayMixin, resizeMixin],
  components: {
    LinkTag,
    BtnTag,
    TransitionSlide,
    DropDownMenu,
  },
  props: {
    items: { type: Array, required: true },
    isHeaderMenu: { type: Boolean, default: false },
    listClasses: { default: 'menu__list' },
    itemClasses: { default: 'menu__item' },
    // itemHoverClass: { type: String, default: 'menu-item--hover' },
    itemHoverClass: { type: String, default: '_hover' },
    linkClasses: { default: 'menu__link' },
    btnIconClass: { type: String, default: 'ver_chevron' },
    btnClasses: { default: 'menu__arrow' },
    subListClasses: { default: 'menu__sub-list' },
    subItemClasses: { default: 'menu__sub-item' },
    subLinkClasses: { default: 'menu__sub-link' },
  },
  data() {
    return {
      selectedItems: [],
      selectedItemsCount: 0,
      isMobileTransitionEffect: false,
    };
  },
  computed: {
    compBtnIconClass() {
      return this.isHeaderMenu ? this.btnIconClass : '';
    },
  },
  methods: {
    getItemClasses(index) {
      return {
        ...this.getClassesAsObject(this.itemClasses),
        [this.itemHoverClass]: this.selectedItems[index],
      };
    },
    areSubItems(items) {
      return this.isHeaderMenu ? items : items.length;
    },
    getBtnText(text) {
      return this.isHeaderMenu ? '' : text;
    },
    getItemTitle(index) {
      return this.isHeaderMenu ? this.items[index].title : '';
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
    this.items.forEach(() => {
      this.selectedItems.push(false);
    });
  },
};
</script>
