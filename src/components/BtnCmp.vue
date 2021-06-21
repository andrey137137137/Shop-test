<template lang='pug'>
button(:class='classes', :type='type')
  slot
</template>

<script>
import addClassesMixin from '@mxn/addClassesMixin';

export default {
  name: 'BtnCmp',
  mixins: [addClassesMixin],
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>
