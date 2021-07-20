<template lang='html'>
  <footer class="footer">
      <div class="footer__container section-container">
        <div class="footer__body">
          <div class="footer__main">
            <LinkTag class="footer__logo"> Funiro.</LinkTag>
            <div class="footer__menu menu-footer">
              <nav class="menu__body" :class="menuActiveClass">
                <MenuList ref="menuBody" />
              </nav>
            </div>
          </div>
          <div class="footer__search">
            <SearchForm />
          </div>
          <div class="footer__actions actions-footer">
            <LinkTag
              iconClass="heart"
              classes="actions-footer__item actions-footer__item_favorites"
            >
            </LinkTag>
            <div class="actions-footer__item cart-footer">
              <LinkTag iconClass="cart" classes="cart-footer__icon"></LinkTag>
              <div class="cart-footer__body">
                <ul class="cart-footer__list cart-list"></ul>
              </div>
            </div>
            <LinkTag class="actions-footer__item actions-footer__item_user _ibg">
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
import MenuList from './MenuList';
import SearchForm from './SearchForm';

export default {
  name: 'FooterCmp',
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
