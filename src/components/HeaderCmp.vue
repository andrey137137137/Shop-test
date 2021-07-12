<template lang='html'>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container section-container">
        <div class="header__body">
          <div class="header__main">
            <LinkTag class="header__logo"> Funiro.</LinkTag>
            <div class="header__menu menu">
              <nav class="menu__body" :class="menuActiveClass">
                <MenuList ref="menuBody" />
              </nav>
            </div>
          </div>
          <div class="header__search">
            <SearchForm />
          </div>
          <div class="header__actions actions-header">
            <LinkTag
              iconClass="heart"
              classes="actions-header__item actions-header__item_favorites"
            >
            </LinkTag>
            <div class="actions-header__item cart-header">
              <LinkTag iconClass="cart" classes="cart-header__icon"></LinkTag>
              <div class="cart-header__body">
                <ul class="cart-header__list cart-list"></ul>
              </div>
            </div>
            <LinkTag class="actions-header__item actions-header__item_user _ibg">
              <ImgTag alt="Avatar" :src="require('@assets/logo.png')" />
            </LinkTag>
          </div>
          <BtnTag class="icon-menu" :class="burgerActiveClass" ref="burger">
            <span v-for="i in 3" :key="i" ref="burgerLines"></span>
          </BtnTag>
        </div>
      </div>
    </div>
  </header>
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
