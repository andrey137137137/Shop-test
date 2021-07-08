<template lang='pug'>
.search_form(:class='activeClass')
  BtnTag(iconClass='loupe', classes='search_form-icon', ref='searchFormToggle')
  form.search_form-item(action='#')
    BtnTag(
      iconClass='loupe',
      classes='search_form-btn',
      type='submit',
      ref='searchFormBtn'
    )
    input.search_form-input(
      autocomplete='off',
      type='text',
      ref='searchFormInput'
    )
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
    handle(target) {
      if (
        target == this.$refs.searchFormBtn.$el ||
        target == this.$refs.searchFormInput.$el
      ) {
        return true;
      }

      if (target == this.$refs.searchFormToggle.$el) {
        this.toggle();
        return true;
      }

      return false;
    },
  },
};
</script>
