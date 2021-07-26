<template lang='pug'>
header.header
  .header__wrapper
    .header__container.section-container
      .header__body
        .header__main
          LinkTag.header__logo Funiro.
          .header__menu.menu
            nav.menu__body(:class='menuActiveClass')
              NavMenu(:items='menuItems', :isHeaderMenu='true', ref='menuBody')
        .header__search
          SearchForm
        .header__actions.actions-header
          LinkTag(
            iconClass='heart',
            classes='actions-header__item actions-header__item_favorites'
          )
          .actions-header__item.cart-header
            LinkTag(iconClass='cart', classes='cart-header__icon')
            .cart-header__body
              ul.cart-header__list.cart-list
          LinkTag.actions-header__item.actions-header__item_user._ibg
            ImgTag(alt='Avatar', :src='require("@assets/logo.png")')
        BtnTag.icon-menu(:class='burgerActiveClass', ref='burger')
          span(v-for='i in 3', :key='i', ref='burgerLines')
</template>

<script>
import clickAwayMixin from '@mxn/clickAwayMixin';
import LinkTag from '@tags/LinkTag';
import BtnTag from '@tags/BtnTag';
import ImgTag from '@tags/ImgTag';
import NavMenu from '@cmp/NavMenu';
import SearchForm from './SearchForm';

export default {
  name: 'HeaderCmp',
  mixins: [clickAwayMixin],
  components: {
    LinkTag,
    BtnTag,
    ImgTag,
    NavMenu,
    SearchForm,
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
      isToggled: false,
    };
  },
  computed: {
    menuActiveClass() {
      // return { 'menu-body--active': this.isToggled };
      return { _active: this.isToggled };
    },
    burgerActiveClass() {
      // return { 'header-burger--active': this.isToggled };
      return { _active: this.isToggled };
    },
  },
  methods: {
    toggle() {
      this.isToggled = !this.isToggled;
    },
    reset() {
      this.isToggled = false;
    },
    isClickedParent(target) {
      return target == this.$refs.menuBody.$el;
    },
    clickAwayHandle(triggerIndex, target, context) {
      if (context.checkChildren(triggerIndex, target, 5)) {
        return true;
      }

      if (target == this.$refs.burger.$el) {
        this.toggle();
        return true;
      }

      return this.checkRefArray(this.$refs.burgerLines, target, this.toggle);
    },
  },
};
</script>

<style lang='scss' src='@scssCmp/HeaderCmp.scss'>
</style>
