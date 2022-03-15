<template>
  <qe-primitive-layer>
    <qe-tileset url="/bim/tileset.json" :is-zoom-to="false" />
  </qe-primitive-layer>
</template>
<script>
import {
  QePrimitiveLayer,
  QeTileset,
} from '@qycloud/vue-qearth';

export default {
  components: {
    QePrimitiveLayer,
    QeTileset,
  },

};
</script>
