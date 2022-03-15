<template>
  <div class="security-box">
    <left-panel :videoList="leftVideoList" side="left" @handlePlay="handlePlay"/>
    <left-panel :videoList="rightVideoList" side="right" @handlePlay="handlePlay" id="rightPanel" />
  </div>
</template>
<script>
import leftPanel from './left-panel.vue';

export default {
  components: {
    leftPanel,
  },
  data() {
    return {
      videoId: '',
      leftVideoList: [
        {
          title: '北球机3',
          logo: require('../../assets/image/video1.png'),
          id: '61bc3de0bb504092923b068adcbb0463',
        },
        {
          title: '南球机2',
          logo: require('../../assets/image/video2.png'),
          id: '93e88f6ff5d14b71a7a0572054775311',
        },
        {
          title: '北球机3',
          logo: require('../../assets/image/video1.png'),
          id: '61bc3de0bb504092923b068adcbb0463',
        },
        {
          title: '北球机2',
          logo: require('../../assets/image/video3.png'),
          id: '5a7385e1a7a14888934330ccafb79e49',
        },
        {
          title: '盈德照1#高炉',
          logo: require('../../assets/image/video1.png'),
          id: 'c06905c0ea8442ef9d29b1a46aceefee',
        },
        {
          title: '2#高炉照1#高炉',
          logo: require('../../assets/image/video2.png'),
          id: 'e5ff7f6a2c084540b20d1bc6bf99ef56',
        },
      ],
      rightVideoList: [
        {
          title: '2#高炉照1#高炉',
          logo: require('../../assets/image/video2.png'),
          id: 'e5ff7f6a2c084540b20d1bc6bf99ef56',
        },
        {
          title: '3#高炉矿槽',
          logo: require('../../assets/image/video1.png'),
          id: '1a53e99180ec480bab4f3bfa10f66999',
        },
        {
          title: '南球机2',
          logo: require('../../assets/image/video2.png'),
          id: '93e88f6ff5d14b71a7a0572054775311',
        },
        {
          title: '四轧加热炉',
          logo: require('../../assets/image/video1.png'),
          id: '1a95ca7797534dd48892ce6181417dcf',
        },
        {
          title: '2号烧结机',
          logo: require('../../assets/image/video3.png'),
          id: '9df42298e16c422f9fdb8f00b931c420',
        },
        {
          title: '盈德照1#高炉',
          logo: require('../../assets/image/video1.png'),
          id: 'c06905c0ea8442ef9d29b1a46aceefee',
        },
      ],
    };
  },
  methods: {
    handlePlay(item) {
      console.log(item);
      this.videoId = item.id;
    },

  },
};
</script>
<style lang="scss" scoped>
.security-box {
  width: 100%;
  height: 100%;
  // padding: 0 cw(20) 0 cw(19);
  background: url('../../assets/image/security-bg.png') no-repeat;
  display: flex;
  justify-content: space-between;
  position: relative;
}
</style>
