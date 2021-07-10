<template lang='pug'>
header.section.header
  .header-wrapper
    .section-container.header-container
      .section-body.header-body
        .header-main
          LinkTag.header-logo Funiro.
          .menu.header-menu
            nav.menu-body(:class='menuActiveClass')
              MenuList(ref='menuBody')
        .header-search
          SearchForm
        .actions.header-actions
          LinkTag(
            iconClass='heart',
            classes='actions-item actions-item--favorites'
          )
          .actions-item.cart
            LinkTag(iconClass='cart', classes='cart-icon')
            .cart-body
              ul.cart-list
          LinkTag.actions-item.actions-item--user
            ImgTag(:src='require("@assets/logo.png")', alt='Avatar')
        BtnTag.header-burger(:class='burgerActiveClass', ref='burger')
          span(v-for='i in 3', ref='burgerLines')
</template>

<script>
import clickAwayMixin from '@mxn/clickAwayMixin';
import LinkTag from '@tags/LinkTag';
import BtnTag from '@tags/BtnTag';
import ImgTag from '@tags/ImgTag';
import MenuList from '@cmp/MenuList';
import SearchForm from '@cmp/SearchForm';

export default {
  name: 'HeaderCmp',
  mixins: [clickAwayMixin],
  components: {
    LinkTag,
    BtnTag,
    ImgTag,
    MenuList,
    SearchForm,
  },
  data() {
    return {
      isToggled: false,
    };
  },
  computed: {
    menuActiveClass() {
      return { 'menu-body--active': this.isToggled };
    },
    burgerActiveClass() {
      return { 'header-burger--active': this.isToggled };
    },
  },
  methods: {
    reset() {
      this.isToggled = false;
    },
    toggle() {
      this.isToggled = !this.isToggled;
    },
    isClickedParent(target) {
      if (target == this.$refs.menuBody.$el) {
        return true;
      }

      return false;
    },
    clickAwayHandle(target) {
      if (this.checkChildren(target, 5)) {
        return true;
      }

      if (target == this.$refs.burger.$el) {
        this.toggle();
        return true;
      }

      for (let index = 0; index < this.$refs.burgerLines.length; index++) {
        if (target == this.$refs.burgerLines[index]) {
          this.toggle();
          return true;
        }
      }

      return false;
    },
  },
};
</script>

<style lang='scss' src='@scssCmp/HeaderCmp.scss'>
</style>
