<template lang='pug'>
header.header
  .header-wrapper
    .header-container
      .header-body
        .header-main
          LinkCmp(classes='header-logo')
          .menu.header-menu
            nav.menu-body
              ul.menu-list
                li.menu-item(v-for='i in 3')
                  LinkCmp(classes='menu-link') {{ i }}
                  BtnCmp(classes='menu-arrow icon-arrow_down')
                  ul.menu-sub_list
                    li.menu-sub_item
                      LinkCmp(
                        v-for='i in 4',
                        :key='i',
                        classes='menu-sub_link'
                      ) Product {{ i }}
        .header-search
          .search_form
            BtnCmp(classes='search_form-icon icon-search')
            form.search_form-item(action='#')
        .header-actions
        BtnCmp(classes='icon_menu')
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
