<template lang='pug'>
footer.footer 
  .footer__container.section-container
    .footer__body
      .footer__main
        LinkTag.footer__logo._footer-title Funiro.
        .footer__text Worldwide furniture store since 2020. We sell over 1000+ branded products on our website
        .footer__contacts.contacts-footer 
          LinkTag.contacts-footer__item(iconClass='location') Sawojajar Malang, Indonesia
          LinkTag.contacts-footer__item(
            iconClass='phone',
            href='tel:+62894563455'
          ) +6289 456 3455
          LinkTag.contacts-footer__item(
            href='https://www.funiro.com',
            target='_blank'
          ) www.funiro.com
      NavMenu(
        :items='menuItems',
        listClasses='footer__menu.menu-footer',
        itemClasses='menu-footer__column',
        btnClasses='menu-footer__title._footer-title',
        subListClasses='menu-footer__list',
        subItemClasses='',
        subLinkClasses='menu-footer__link'
      )
      FooterForm
  //- itemHoverClass='_init icon-ver_chevron'
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

<style lang='scss'>
@import '@scssCmp/FooterCmp';
</style>
