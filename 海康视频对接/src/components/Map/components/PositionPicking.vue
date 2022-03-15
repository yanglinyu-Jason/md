<template>
  <qe-picking
      ref="picking"
      :picking="picking"
      :is-single="true"
      @picked="pickedEvts"
    ></qe-picking>
</template>
<script>
export default {
  props: {
    picking: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    pickedEvts(evt, evt1) {
      console.log(evt, evt1);
    },
  },
};
</script>
