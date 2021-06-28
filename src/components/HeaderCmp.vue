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
                    iconClass='ver_chevron',
                    classes='menu-arrow',
                    ref='menuBtns'
                  )
                  ul.menu-sub_list(v-if='areSubItems(item.items)')
                    li.menu-sub_item(v-for='i in item.items', :key='i')
                      LinkTag.menu-sub_link {{ getSubTitle(item.title, i) }}
        .header-search
          .search_form
            BtnTag(iconClass='loupe', classes='search_form-icon')
            form.search_form-item(action='#')
              BtnTag(
                iconClass='loupe',
                classes='search_form-btn',
                type='submit'
              )
              input.search_form-input(autocomplete='off', type='text')
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
            imgTag(:src='require("@assets/logo.png")', alt='Avatar')
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
      selectedItems: [],
      selectedItemsCount: 0,
    };
  },
  computed: {
    isGadget() {
      if (
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
    areSubItems(items) {
      return items;
    },
    isPad() {
      if (
        window.innerWidth >= 768 &&
        window.innerWidth < 992 &&
        this.isGadget
      ) {
        return true;
      }

      return false;
    },
    getSubTitle(parentTitle, index) {
      const title = parentTitle.substr(0, parentTitle.length - 1);
      return `${title} #${index}`;
    },
    itemHoverClass(index) {
      if (this.selectedItems[index]) {
        return 'menu-item--hover';
      }

      return '';
    },
    setSelectedItem(index) {
      this.$set(this.selectedItems, index, !this.selectedItems[index]);

      if (this.selectedItems[index]) {
        this.selectedItemsCount++;
      } else {
        this.selectedItemsCount--;
      }

      if (this.selectedItemsCount < 0) {
        this.selectedItemsCount = 0;
      }
    },
    resetSelectedItems() {
      if (this.selectedItemsCount > 0) {
        this.selectedItems = this.selectedItems.map(() => false);
        this.selectedItemsCount = 0;
      }
    },
    onClick(e) {
      if (!this.isPad()) {
        this.resetSelectedItems();
        return;
      }

      for (let index = 0; index < this.$refs.menuBtns.length; index++) {
        if (e.target == this.$refs.menuBtns[index].$el) {
          this.setSelectedItem(index);
          return;
        }
      }

      this.resetSelectedItems();
    },
  },
  created() {
    this.menuItems.forEach(() => {
      this.selectedItems.push(false);
    });
  },
  mounted() {
    document.addEventListener('click', this.onClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick);
  },
};
</script>

<style lang='scss' src='@scssCmp/HeaderCmp.scss'>
</style>
