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
        <NavMenu
          :items='menuItems'
          listClasses='footer__menu menu-footer'
          itemClasses='menu-footer__column'
          btnClasses='menu-footer__title _footer-title'
          subListClasses='menu-footer__list'
          subItemClasses=''
          subLinkClasses='menu-footer__link' />
        <FooterForm />
		</div>
	</div>
</footer>
</template>

<script>
import LinkTag from '@tags/LinkTag';
import NavMenu from '@cmp/NavMenu';
import FooterForm from './FooterForm';

export default {
  name: 'FooterCmp',
  components: {
    LinkTag,
    NavMenu,
    FooterForm,
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
};
</script>

<style lang='scss' src='@scssCmp/FooterCmp.scss'>
</style>
