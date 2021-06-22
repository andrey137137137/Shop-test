<template lang='pug'>
header.section.header
  .header-wrapper
    .section-container.header-container
      .section-body.header-body
        .header-main
          LinkTag.header-logo Funiro.
          .menu.header-menu
            nav.menu-body
              ul.menu-list
                li.menu-item(
                  v-for='(item, index) in menuItems',
                  :class='itemHoverClass(index)'
                )
                  LinkTag.menu-link {{ item.title }}
                  BtnTag(
                    v-if='areSubItems(item.items)',
                    iconClass='arrow_down',
                    classes='menu-arrow',
                    @click.native='onClick(index)'
                  ) ^
                  ul.menu-sub_list(v-if='areSubItems(item.items)')
                    li.menu-sub_item(v-for='i in item.items', :key='i')
                      LinkTag.menu-sub_link {{ getSubTitle(item.title, i) }}
        .header-search
          .search_form
            BtnTag(iconClass='search', classes='search_form-icon')
            form.search_form-item(action='#')
              BtnTag(
                iconClass='search',
                classes='search_form-btn',
                type='submit'
              )
              input.search_form-input(autocomplete='off', type='text')
        .actions.header-actions
          LinkTag(
            iconClass='favorites',
            classes='actions-item actions-favorites'
          )
          .actions-item.cart
            LinkTag(iconClass='cart', classes='cart-icon')
            .cart-body
              ul.cart-list
          LinkTag.actions-item.actions-item_user
            imgTag(src='img/avatar.jpg', alt='Avatar')
        BtnTag.icon_menu
          span(v-for='i in 3')
</template>

<script>
import LinkTag from '@tags/LinkTag.vue';
import BtnTag from '@tags/BtnTag.vue';
import imgTag from '@tags/imgTag.vue';

export default {
  name: 'HeaderCmp',
  components: {
    LinkTag,
    BtnTag,
    imgTag,
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
      clickedItem: -1,
    };
  },
  computed: {
    isPad() {
      if (
        window.innerWidth >= 768 &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
          navigator.userAgent,
        )
      ) {
        return true;
      }

      return false;
    },
  },
  methods: {
    itemHoverClass(index) {
      if (this.clickedItem == index) {
        return 'menu-item--hover';
      }

      return '';
    },
    areSubItems(items) {
      return items;
    },
    getSubTitle(parentTitle, index) {
      const title = parentTitle.substr(0, parentTitle.length - 1);
      return `${title} #${index}`;
    },
    onClick(index) {
      if (!this.isPad) {
        this.clickedItem = -1;
        return;
      }

      if (this.clickedItem == index) {
        this.clickedItem = -1;
      } else {
        this.clickedItem = index;
      }
    },
  },
};
</script>

<style lang='scss' src='@scssCmp/HeaderCmp.scss'>
</style>
