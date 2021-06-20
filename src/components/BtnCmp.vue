<template lang='pug'>
button(:class='classes', :type='type')
  slot
</template>

<script>
export default {
  name: 'BtnCmp',
  props: {
    classes: {
      required: true,
    },
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>
