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
import dropDownMenuMixin from '@mxn/dropDownMenuMixin';
import LinkTag from '@tags/LinkTag';
import BtnTag from '@tags/BtnTag';

export default {
  name: 'FooterMenu',
  mixins: [dropDownMenuMixin],
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
  },
};
</script>
