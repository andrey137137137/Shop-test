<template>
  <div id="app">
    <div class="wrapper">
      <HeaderCmp />
      <div class="page"></div>
    </div>
  </div>
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
