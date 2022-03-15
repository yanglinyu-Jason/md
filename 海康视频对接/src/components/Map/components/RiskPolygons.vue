<template>
  <qe-entity-layer>
    <qe-polygon
      v-for="(item, index) in list"
      :key="index"
      :positions="item.positions"
      :styles="item.style"
    ></qe-polygon>
  </qe-entity-layer>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          /* positions: [
            [120.76750886, 33.20891604, 0],
            [120.76995814, 33.20899785, 0],
            [120.77019808, 33.20628953, 0],
            [120.76893428, 33.20615144, 0],
          ], */
          positions: [
            [120.77119526, 33.21305954, 0],
            [120.77380355, 33.21321553, 0],
            [120.77447515, 33.20912431, 0],
            [120.77173111, 33.20892944, 0],
          ],
          style: {
            material: 'rgba(97, 179, 247, 0.5)',
            outline: true,
            outlineColor: 'rgba(65, 180, 253, 1)',
            outlineWidth: 4,
          },
        },
        {
          positions: [
            [120.77722232, 33.21674358, 0],
            [120.78074705, 33.21709411, 0],
            [120.7812198, 33.21176395, 0],
            [120.77796085, 33.21174849, 0],
          ],
          style: {
            material: 'rgba(246, 243, 83, 0.5)',
            outline: true,
            outlineColor: 'rgba(246, 243, 83, 1)',
            outlineWidth: 4,
          },
        },
        {
          positions: [
            [120.76699854, 33.21127467, 0],
            [120.77104253, 33.2115926, 0],
            [120.77159202, 33.20643909, 0],
            [120.76893563, 33.20606539, 0],
          ],
          style: {
            material: 'rgba(244, 53, 36, 0.5)',
            outline: true,
            outlineColor: 'rgba(244, 53, 36, 1)',
            outlineWidth: 4,
          },
        },
        {
          positions: [
            [120.77179744, 33.2085974, 0],
            [120.7778895, 33.20911781, 0],
            [120.77793223, 33.20826905, 0],
            [120.77344248, 33.20778455, 0],
            [120.7735671, 33.20657715, 0],
            [120.77203627, 33.20650164, 0],
          ],
          style: {
            material: 'rgba(242, 162, 67, 0.5)',
            outline: true,
            outlineColor: 'rgba(242, 162, 67, 1)',
            outlineWidth: 4,
          },
        },
      ],
    };
  },
};
</script>
