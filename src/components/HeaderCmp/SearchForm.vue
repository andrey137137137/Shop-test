<template lang='pug'>
.search-form(:class='activeClass')
  BtnTag(iconClass='loupe', classes='search-form__icon', ref='toggle')
  form.search-form__item(action='#', ref='searchForm')
    BtnTag(iconClass='loupe', classes='search-form__btn')
    input.search-form__input(autocomplete='off', type='text')
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
      // return { 'search_form--active': this.isToggled };
      return { _active: this.isToggled };
    },
  },
  methods: {
    toggle() {
      this.isToggled = !this.isToggled;
    },
    reset() {
      this.isToggled = false;
    },
    isClickedParent(target) {
      if (target == this.$refs.searchForm) {
        return true;
      }

      return false;
    },
    clickAwayHandle(index, target, context) {
      if (context.checkChildren(index, target, 1)) {
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
