<template lang='pug'>
img(:class='compClasses', :src='src', :alt='alt')
</template>

<script>
import addClassesMixin from '@mxn/addClassesMixin';

export default {
  name: 'imgTag',
  mixins: [addClassesMixin],
  props: {
    src: { type: String, default: '' },
    alt: { type: String, default: '' },
  },
};
</script>
