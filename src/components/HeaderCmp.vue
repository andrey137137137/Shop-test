<template lang='pug'>
header.header
  .header-wrapper
    .section-container.header-container
      .header-body
        .header-main
          LinkCmp.header-logo
          .menu.header-menu
            nav.menu-body
              ul.menu-list
                li.menu-item(v-for='i in 3')
                  LinkCmp.menu-link {{ i }}
                  BtnCmp.menu-arrow.icon-arrow_down
                  ul.menu-sub_list
                    li.menu-sub_item
                      LinkCmp.menu-sub_link(v-for='i in 4', :key='i') Product {{ i }}
        .header-search
          .search_form
            BtnCmp.search_form-icon.icon-search
            form.search_form-item(action='#')
        .header-actions
        BtnCmp.icon_menu
          span(v-for='i in 3')
</template>

<script>
import LinkCmp from '@cmp/LinkCmp.vue';
import BtnCmp from '@cmp/BtnCmp.vue';

export default {
  name: 'HeaderCmp',
  components: {
    LinkCmp,
    BtnCmp,
  },
  props: {
    msg: String,
  },
};
</script>

<style lang='scss'>
</style>
