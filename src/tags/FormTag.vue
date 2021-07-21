<template lang='pug'>
form(:class='compClasses', :action='action')
  slot
</template>

<script>
import addClassesMixin from '@mxn/addClassesMixin';

export default {
  name: 'FormTag',
  mixins: [addClassesMixin],
  props: {
    action: { type: String, default: 'GET' },
  },
};
</script>
