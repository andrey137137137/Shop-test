<template lang='pug'>
a(:class='classes', :href='href')
  slot
</template>

<script>
import addClassesMixin from '@mxn/addClassesMixin';

export default {
  name: 'LinkCmp',
  mixins: [addClassesMixin],
  props: {
    href: {
      type: String,
      default: '',
    },
  },
};
</script>
