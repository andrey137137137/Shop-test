<template lang='pug'>
.footer__menu.menu-footer
  .menu-footer__column(
    v-for='(item, index) in menuItems',
    :class='itemHoverClass(index)',
    ref='columns'
  )
    BtnTag.menu-footer__title._footer-title {{ item.title }}
    transition(
      name='slide',
      v-on:enter='enter',
      v-on:after-enter='afterEnter',
      v-on:leave='leave'
    )
      ul.menu-footer__list(
        v-if='areSubItems(item.items)',
        v-show='isSelectedOnMobile(index)',
        :key='"subList-" + index',
        ref='subLists'
      )
        li(v-for='(subItem, i) in item.items', :key='i')
          LinkTag.menu-footer__link {{ subItem.title }}
</template>

<script>
import clickAwayMixin from '@mxn/clickAwayMixin';
import isGadgetMixin from '@mxn/isGadgetMixin';
import LinkTag from '@tags/LinkTag';
import BtnTag from '@tags/BtnTag';

export default {
  name: 'FooterMenu',
  mixins: [clickAwayMixin, isGadgetMixin],
  components: {
    LinkTag,
    BtnTag,
  },
  data() {
    return {
      menuItems: [
        {
          title: 'Menu',
          link: '',
          items: [
            {
              title: 'Products',
              link: '',
            },
            {
              title: 'Rooms',
              link: '',
            },
            {
              title: 'Inspirations',
              link: '',
            },
            {
              title: 'About Us',
              link: '',
            },
            {
              title: 'Terms & Policy',
              link: '',
            },
          ],
        },
        {
          title: 'Account',
          link: '',
          items: [
            {
              title: 'My Account',
              link: '',
            },
            {
              title: 'Checkout',
              link: '',
            },
            {
              title: 'My Cart',
              link: '',
            },
            {
              title: 'My catalog',
              link: '',
            },
          ],
        },
        {
          title: 'Stay Connected',
          link: '',
          items: [
            {
              title: 'Facebook',
              link: '',
            },
            {
              title: 'Instagram',
              link: '',
            },
            {
              title: 'Twitter',
              link: '',
            },
          ],
        },
      ],
      selectedItems: [],
      selectedItemsCount: 0,
      isMobileTransitionEffect: false,
      timeout: 0,
      transitionProperty: 'height, margin, padding',
      transitionDuration: '1s',
    };
  },
  methods: {
    areSubItems(items) {
      return items.length;
    },
    getSubTitle(parentTitle, index) {
      const title = parentTitle.substr(0, parentTitle.length - 1);
      return `${title} #${index}`;
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
    checkMobile() {
      console.log(window.innerWidth);
      if (this.isMobile()) {
        this.isMobileTransitionEffect = true;
      } else {
        this.isMobileTransitionEffect = false;
      }
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

      return this.checkRefArray(
        this.$refs.columns,
        target,
        this.setSelectedItem,
        true,
      );
    },
    onResize() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.checkMobile, 100);
    },
  },
  created() {
    this.menuItems.forEach(() => {
      this.selectedItems.push(false);
    });
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
