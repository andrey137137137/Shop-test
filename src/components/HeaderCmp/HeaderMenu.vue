<template lang='pug'>
ul.menu__list
  li.menu__item(
    v-for='(item, index) in menuItems',
    :class='itemHoverClass(index)',
    ref='items'
  )
    LinkTag.menu__link {{ item.title }}
    BtnTag(
      v-if='areSubItems(item.items)',
      iconClass='ver_chevron',
      classes='menu__arrow',
      ref='arrows'
    )
    TransitionSlide
      DropDownMenu(
        v-if='areSubItems(item.items)',
        v-show='isSelectedOnMobile(index)',
        :key='"subList-" + index',
        :items='item.items',
        :headerMenuTitle='item.title',
        ref='subLists'
      )
</template>

<script>
import dropDownMenuMixin from '@mxn/dropDownMenuMixin';
import TransitionSlide from '@cmp/TransitionSlide';
import DropDownMenu from '@cmp/DropDownMenu';
import LinkTag from '@tags/LinkTag';
import BtnTag from '@tags/BtnTag';

export default {
  name: 'HeaderMenu',
  mixins: [dropDownMenuMixin],
  components: {
    TransitionSlide,
    DropDownMenu,
    LinkTag,
    BtnTag,
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
    };
  },
  methods: {
    areSubItems(items) {
      return items;
    },
  },
};
</script>
