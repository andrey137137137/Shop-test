<template lang='pug'>
header.section.header
  .header-wrapper
    .section-container.header-container
      .section-body.header-body
        .header-main
          LinkTag.header-logo Funiro.
          .menu.header-menu
            nav.menu-body(:class='menuActiveClass')
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
            imgTag(:src='require("@assets/logo.png")', alt='Avatar')
        BtnTag.header-burger(:class='burgerActiveClass')
          span(v-for='i in 3')
</template>

<script>
import clickAwayMixin from '@mxn/clickAwayMixin';
import LinkTag from '@tags/LinkTag.vue';
import BtnTag from '@tags/BtnTag.vue';
import imgTag from '@tags/imgTag.vue';
import SearchForm from '@cmp/SearchForm.vue';

export default {
  name: 'HeaderCmp',
  mixins: [clickAwayMixin],
  components: {
    LinkTag,
    BtnTag,
    imgTag,
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
      isToggledMenu: false,
      selectedItems: [],
      selectedItemsCount: 0,
    };
  },
  computed: {
    menuActiveClass() {
      return { 'menu-body--active': this.isToggledMenu };
    },
    burgerActiveClass() {
      return { 'header-burger--active': this.isToggledMenu };
    },
  },
  methods: {
    areSubItems(items) {
      return items;
    },
    getSubTitle(parentTitle, index) {
      const title = parentTitle.substr(0, parentTitle.length - 1);
      return `${title} #${index}`;
    },
    itemHoverClass(index) {
      return { 'menu-item--hover': this.selectedItems[index] };
    },
    reset() {
      if (this.selectedItemsCount > 0) {
        this.selectedItems = this.selectedItems.map(() => false);
        this.selectedItemsCount = 0;
      }
    },
    setSelectedItem(index) {
      this.isToggledSearchForm = false;
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
    handle(target) {
      for (let index = 0; index < this.$refs.menuBtns.length; index++) {
        if (target == this.$refs.menuBtns[index].$el) {
          this.setSelectedItem(index);
          return true;
        }
      }

      return false;
    },
  },
  created() {
    this.menuItems.forEach(() => {
      this.selectedItems.push(false);
    });
  },
};
</script>

<style lang='scss' src='@scssCmp/HeaderCmp.scss'>
</style>
