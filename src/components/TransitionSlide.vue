<template lang="pug">
transition(
  name='slide',
  v-on:enter='enter',
  v-on:after-enter='afterEnter',
  v-on:leave='leave'
)
  slot
  //- :css='false',
</template>

<script>
export default {
  name: 'TransitionSlide',
  methods: {
    enter(element) {
      element.style.width = getComputedStyle(element).width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      // Trigger the animation.
      // We use `requestAnimationFrame` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      requestAnimationFrame(() => {
        element.style.height = height;
        // element.style.marginTop = getComputedStyle(element).marginTop;
        // element.style.paddingTop = getComputedStyle(element).paddingTop;
        // element.style.paddingBottom = getComputedStyle(element).paddingBottom;
        // done();
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    leave(element) {
      const height = getComputedStyle(element).height;

      element.style.height = height;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        // element.style.marginTop = 0;
        // element.style.paddingTop = 0;
        // element.style.paddingBottom = 0;
        element.style.height = 0;
        // done();
      });
    },
  },
};
</script>
