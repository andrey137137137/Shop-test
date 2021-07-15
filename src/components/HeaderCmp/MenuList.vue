<template lang='pug'>
ul.menu__list
  li.menu__item(
    v-for='(item, index) in menuItems',
    :class='itemHoverClass(index)'
  )
    LinkTag.menu__link {{ item.title }}
    BtnTag(
      v-if='areSubItems(item.items)',
      iconClass='ver_chevron',
      classes='menu__arrow',
      ref='arrows'
    )
    transition(
      name='slide',
      v-on:enter='enter',
      v-on:after-enter='afterEnter',
      v-on:leave='leave'
    )
      ul.menu__sub-list(
        v-if='areSubItems(item.items)',
        v-show='isSelectedOnMobile(index)',
        :key='"subList-" + index',
        ref='subLists'
      )
        li.menu__sub-item(v-for='i in item.items', :key='i')
          LinkTag.menu__sub-link {{ getSubTitle(item.title, i) }}
</template>

<script>
import clickAwayMixin from '@mxn/clickAwayMixin';
import LinkTag from '@tags/LinkTag';
import BtnTag from '@tags/BtnTag';

export default {
  name: 'MenuList',
  mixins: [clickAwayMixin],
  components: {
    LinkTag,
    BtnTag,
  },
  data() {
    return {
      menuItems: [
        {
          title: 'Products',
          link: '',
          items: 4,
        },
        {
          title: 'Rooms',
          link: '',
          items: 4,
        },
        {
          title: 'Inspirations',
          link: '',
          items: 0,
        },
      ],
      selectedItems: [],
      selectedItemsCount: 0,
      isMobile: false,
    };
  },
  methods: {
    areSubItems(items) {
      return items;
    },
    getSubTitle(parentTitle, index) {
      const title = parentTitle.substr(0, parentTitle.length - 1);
      return `${title} #${index}`;
    },
    itemHoverClass(index) {
      // return { 'menu-item--hover': this.selectedItems[index] };
      return { _hover: this.selectedItems[index] };
    },
    reset() {
      if (this.selectedItemsCount > 0) {
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
    isSelectedOnMobile(index) {
      if (!this.isMobile) {
        return true;
      }

      if (this.selectedItems[index] && this.isGadget()) {
        return true;
      }

      return false;
    },
    isClickedParent(target) {
      for (let index = 0; index < this.$refs.subLists.length; index++) {
        if (target == this.$refs.subLists[index]) {
          return true;
        }
      }

      return false;
    },
    clickAwayHandle(target) {
      if (this.checkChildren(target, 2)) {
        return true;
      }

      for (let index = 0; index < this.$refs.arrows.length; index++) {
        if (target == this.$refs.arrows[index].$el) {
          this.setSelectedItem(index);
          return true;
        }
      }

      return false;
    },
    enter(element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
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
    onResize() {
      console.log(window.innerWidth);
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  created() {
    this.menuItems.forEach(() => {
      this.selectedItems.push(false);
    });
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
