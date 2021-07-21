<template>
  <div id="app">
    <div class="wrapper">
      <HeaderCmp />
      <div class="page"></div>
      <FooterCmp />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import isGadgetMixin from '@mxn/isGadgetMixin';
import HeaderCmp from '@cmp/HeaderCmp';
import FooterCmp from '@cmp/FooterCmp';

const { mapGetters } = createNamespacedHelpers('clickAway');

export default {
  name: 'App',
  mixins: [isGadgetMixin],
  components: {
    HeaderCmp,
    FooterCmp,
  },
  computed: {
    ...mapGetters(['triggers', 'resets']),
  },
  methods: {
    checkChildren(triggerIndex, target, deep) {
      // console.log(this);
      for (
        let curDeep = 0, child = target;
        curDeep <= deep;
        curDeep++, child = child.parentNode
      ) {
        if (!child) {
          return false;
        }

        if (this.triggers[triggerIndex].isClickedParent(child)) {
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

      $vm.triggers.forEach((item, index) => {
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
