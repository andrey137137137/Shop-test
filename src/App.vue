<template>
  <div id="app">
    <div class="wrapper">
      <HeaderCmp />
      <div class="page"></div>
    </div>
  </div>
</template>

<script>
import isGadgetMixin from '@mxn/isGadgetMixin';
import HeaderCmp from '@cmp/HeaderCmp';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  mixins: [isGadgetMixin],
  components: {
    HeaderCmp,
  },
  computed: {
    ...mapGetters(['clickAways', 'resets']),
  },
  methods: {
    checkChildren(index, target, deep) {
      for (
        let curDeep = 0, child = target;
        curDeep <= deep;
        curDeep++, child = child.parentNode
      ) {
        if (!child) {
          return false;
        }

        if (this.clickAways[index].isClickedParent(child)) {
          return true;
        }
      }

      return false;
    },
    onClick(e) {
      if (!this.isPad()) {
        this.resets.forEach(func => {
          func();
        });
        return;
      }

      console.log(e.target);

      this.clickAways.forEach((item, index) => {
        if (item.handle(index, e.target)) {
          return;
        }

        item.reset();
      });
    },
  },
  mounted() {
    document.addEventListener('click', this.onClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick);
  },
};
</script>

<style lang='scss'>
@import '@scss/app';
</style>
