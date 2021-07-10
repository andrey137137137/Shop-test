<template lang='pug'>
.search_form(:class='activeClass')
  BtnTag(iconClass='loupe', classes='search_form-icon', ref='toggle')
  form.search_form-item(action='#', ref='searchForm')
    BtnTag(iconClass='loupe', classes='search_form-btn')
    input.search_form-input(autocomplete='off', type='text')
    //- style='line-height: 50px',
    //- type='submit',
</template>

<script>
import clickAwayMixin from '@mxn/clickAwayMixin';
import BtnTag from '@tags/BtnTag';

export default {
  name: 'SearchForm',
  mixins: [clickAwayMixin],
  components: {
    BtnTag,
  },
  data() {
    return {
      isToggled: false,
    };
  },
  computed: {
    activeClass() {
      return { 'search_form--active': this.isToggled };
    },
  },
  methods: {
    reset() {
      this.isToggled = false;
    },
    toggle() {
      this.isToggled = !this.isToggled;
    },
    isClickedParent(target) {
      if (target == this.$refs.searchForm) {
        return true;
      }

      return false;
    },
    clickAwayHandle(target) {
      if (this.checkChildren(target, 1)) {
        return true;
      }

      if (target == this.$refs.toggle.$el) {
        this.toggle();
        return true;
      }

      return false;
    },
  },
};
</script>
