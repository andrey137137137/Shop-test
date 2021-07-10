<template lang='pug'>
#app
  .wrapper
    HeaderCmp
    .page
</template>

<script>
import HeaderCmp from '@cmp/HeaderCmp';

export default {
  name: 'App',
  components: {
    HeaderCmp,
  },
};
</script>

<style lang='scss'>
@import '@scss/app';
</style>
