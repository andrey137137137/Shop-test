<template>
  <div id="app">
    <div class="wrapper">
      <HeaderCmp />
      <div class="page"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import isGadgetMixin from '@mxn/isGadgetMixin';
import HeaderCmp from '@cmp/HeaderCmp';

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
      // console.log(this);
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
      const $vm = this;

      if (!$vm.isPad()) {
        $vm.resets.forEach(func => {
          func();
        });
        return;
      }

      console.log(e.target);

      $vm.clickAways.forEach((item, index) => {
        if (item.handle(index, e.target, $vm)) {
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
