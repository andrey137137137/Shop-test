<template lang="pug">
ul(:class='listClasses')
  li(v-for='(subItem, index) in items', :key='index', :class='itemClasses')
    LinkTag(:class='linkClasses') {{ getSubTitle(subItem) }}
</template>

<script>
import concatClassesMixin from '@mxn/concatClassesMixin';
import LinkTag from '@tags/LinkTag';

export default {
  name: 'DropDownMenu',
  mixins: [concatClassesMixin],
  components: {
    LinkTag,
  },
  props: {
    // items: { type: Array, required: true },
    items: { required: true },
    headerMenuTitle: { type: String, default: '' },
    listClasses: { default: 'menu__sub-list' },
    itemClasses: { default: 'menu__sub-item' },
    linkClasses: { default: 'menu__sub-link' },
  },
  methods: {
    getSubTitle(subItem) {
      if (!this.headerMenuTitle) {
        return subItem.title;
      }

      const title = this.headerMenuTitle.substr(
        0,
        this.headerMenuTitle.length - 1,
      );

      return `${title} #${subItem}`;
    },
  },
};
</script>
