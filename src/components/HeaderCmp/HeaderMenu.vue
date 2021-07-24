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
    transition(
      name='slide',
      v-on:enter='enter',
      v-on:after-enter='afterEnter',
      v-on:leave='leave'
    )
      ul.menu__sub-list(
        v-if='areSubItems(item.items)',
        v-show='isSelectedOnMobile(index)',
        :key='"subList-" + index',
        ref='subLists'
      )
        li.menu__sub-item(v-for='i in item.items', :key='i')
          LinkTag.menu__sub-link {{ getSubTitle(item.title, i) }}
</template>

<script>
import dropDownMenuMixin from '@mxn/dropDownMenuMixin';
import LinkTag from '@tags/LinkTag';
import BtnTag from '@tags/BtnTag';

export default {
  name: 'HeaderMenu',
  mixins: [dropDownMenuMixin],
  components: {
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
    getSubTitle(parentTitle, index) {
      const title = parentTitle.substr(0, parentTitle.length - 1);
      return `${title} #${index}`;
    },
    isClickedParent(target) {
      return this.checkRefArray(this.$refs.subLists, target);
    },
    clickAwayHandle(triggerIndex, target, context) {
      if (context.checkChildren(triggerIndex, target, 2)) {
        return true;
      }

      // if (
      //   this.isMobileTransitionEffect &&
      //   this.checkRefArray(this.$refs.items, target, this.setSelectedItem, true)
      // ) {
      //   return true;
      // }

      return this.checkRefArray(
        this.$refs.arrows,
        target,
        this.setSelectedItem,
        true,
      );
    },
  },
};
</script>
