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

const clickAwayMapGetters = createNamespacedHelpers('clickAway').mapGetters;
const resizeMapGetters = createNamespacedHelpers('resize').mapGetters;

export default {
  name: 'App',
  mixins: [isGadgetMixin],
  components: {
    HeaderCmp,
    FooterCmp,
  },
  data() {
    return { timeout: 0 };
  },
  computed: {
    ...clickAwayMapGetters({
      clickAwayTriggers: 'triggers',
      clickAwayResets: 'resets',
    }),
    ...resizeMapGetters({
      resizeHandles: 'handles',
    }),
  },
  methods: {
    runResizeHandles() {
      this.resizeHandles.forEach(handle => {
        handle();
      });
    },
    onResize() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.runResizeHandles, 100);
    },
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

        if (this.clickAwayTriggers[triggerIndex].isClickedParent(child)) {
          return true;
        }
      }

      return false;
    },
    onClick(e) {
      const $vm = this;

      if (!$vm.isPad()) {
        $vm.clickAwayResets.forEach(func => {
          func();
        });
        return;
      }

      console.log(e.target);

      $vm.clickAwayTriggers.forEach((item, index) => {
        if (item.handle(index, e.target, $vm)) {
          return;
        }

        item.reset();
      });
    },
  },
  mounted() {
    this.runResizeHandles();
    window.addEventListener('resize', this.onResize);
    document.addEventListener('click', this.onClick);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('click', this.onClick);
  },
};
</script>

<style lang='scss'>
@import '@scss/app';
</style>
