<template lang='pug'>
a(:class='classes', :href='href')
  slot
</template>

<script>
export default {
  name: 'LinkCmp',
  props: {
    classes: {
      required: true,
    },
    href: {
      type: String,
      default: '',
    },
  },
};
</script>
