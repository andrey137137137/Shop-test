<template lang='pug'>
button(:class='compClasses', :type='type')
  slot
</template>

<script>
import addClassesMixin from '@mxn/addClassesMixin';

export default {
  name: 'BtnTag',
  mixins: [addClassesMixin],
  props: {
    type: { type: String, default: 'button' },
  },
};
</script>
