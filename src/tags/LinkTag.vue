<template lang='pug'>
a(:class='compClasses', :href='href')
  slot
</template>

<script>
import addClassesMixin from '@mxn/addClassesMixin';

export default {
  name: 'LinkTag',
  mixins: [addClassesMixin],
  props: {
    href: { type: String, default: '' },
  },
};
</script>
