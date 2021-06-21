<template lang='pug'>
#app
  .wrapper
    HeaderCmp(msg='Welcome to Your Vue.js App')
    .page
</template>

<script>
import HeaderCmp from '@cmp/HeaderCmp.vue';

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
