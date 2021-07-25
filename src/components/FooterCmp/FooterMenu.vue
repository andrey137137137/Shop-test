<template lang='pug'>
ul.footer__menu.menu-footer
  li.menu-footer__column(
    v-for='(item, index) in menuItems',
    :class='itemHoverClass(index)',
    ref='items'
  )
    BtnTag.menu-footer__title._footer-title(ref='arrows') {{ item.title }}
    TransitionSlide
      DropDownMenu(
        v-if='areSubItems(item.items)',
        v-show='isSelectedOnMobile(index)',
        :key='"subList-" + index',
        :items='item.items',
        listClasses='menu-footer__list',
        itemClasses='',
        linkClasses='menu-footer__link',
        ref='subLists'
      )
</template>

<script>
import dropDownMenuMixin from '@mxn/dropDownMenuMixin';
import TransitionSlide from '@cmp/TransitionSlide';
import DropDownMenu from '@cmp/DropDownMenu';
import LinkTag from '@tags/LinkTag';
import BtnTag from '@tags/BtnTag';

export default {
  name: 'FooterMenu',
  mixins: [dropDownMenuMixin],
  components: {
    TransitionSlide,
    DropDownMenu,
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
  },
};
</script>
