<template lang='html'>
  <footer class="footer">
    <div class="footer__container section-container">
      <div class="footer__body">
        <div class="footer__main">
          <LinkTag class="footer__logo _footer-title">Funiro.</LinkTag>
          <div class="footer__text">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</div>
          <div class="footer__contacts contacts-footer">
            <LinkTag iconClass='location' class="contacts-footer__item">Sawojajar Malang, Indonesia</LinkTag>
            <LinkTag iconClass='phone' href="tel:+62894563455" class="contacts-footer__item">+6289 456 3455</LinkTag>
            <LinkTag href="https://www.funiro.com" target="_blank" class="contacts-footer__item">www.funiro.com</LinkTag>
          </div>
        </div>
        <FooterMenu />
        <FooterForm />
		</div>
	</div>
</footer>
</template>

<script>
import clickAwayMixin from '@mxn/clickAwayMixin';
import LinkTag from '@tags/LinkTag';
// import BtnTag from '@tags/BtnTag';
// import ImgTag from '@tags/ImgTag';
import FooterMenu from './FooterMenu';
import FooterForm from './FooterForm';

export default {
  name: 'FooterCmp',
  mixins: [clickAwayMixin],
  components: {
    LinkTag,
    // BtnTag,
    // ImgTag,
    FooterMenu,
    FooterForm,
  },
  // data() {
  //   return {
  //     isToggled: false,
  //   };
  // },
  // computed: {
  //   menuActiveClass() {
  //     // return { 'menu-body--active': this.isToggled };
  //     return { _active: this.isToggled };
  //   },
  //   burgerActiveClass() {
  //     // return { 'header-burger--active': this.isToggled };
  //     return { _active: this.isToggled };
  //   },
  // },
  // methods: {
  //   toggle() {
  //     this.isToggled = !this.isToggled;
  //   },
  //   reset() {
  //     this.isToggled = false;
  //   },
  //   isClickedParent(target) {
  //     return target == this.$refs.menuBody.$el;
  //   },
  //   clickAwayHandle(triggerIndex, target, context) {
  //     if (context.checkChildren(triggerIndex, target, 5)) {
  //       return true;
  //     }

  //     if (target == this.$refs.burger.$el) {
  //       this.toggle();
  //       return true;
  //     }

  //     return this.checkRefArray(this.$refs.burgerLines, target, this.toggle);
  //   },
  // },
};
</script>

<style lang='scss' src='@scssCmp/FooterCmp.scss'>
</style>
