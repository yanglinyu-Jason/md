<template>
    <div class="wrap-xiaofang">
        <Subnav :showArrow="false" :baseInfo="baseInfo" />
        <div class="wrapper">
            <div class="leftsidebar">
                <div
                    v-for="(item, index) in leftsidebar"
                    :key="index"
                    @mouseover="currpage = index"
                    :class="[
            index == currpage
              ? 'leftsidebar-box'
              : 'leftsidebar-box leftsidebar-state',
          ]"
                >
                    <div class="leftsidebar-logo">
                        <span
                            class="icon-logo"
                            :style="{
                backgroundPosition:
                  index == currpage ? item.statesize : item.size,
              }"
                        ></span>
                    </div>
                    <div class="leftsidebar-title">
                        <div class="title-name">{{ item.name }}</div>
                        <div class="title-value">{{ item.value }}</div>
                    </div>
                </div>
            </div>
            <div class="rightsidebar">
                <div class="rightsidebar-content">
                    <template v-for="item in dataList">
                        <div :key="item.title">
                            <div :title="item.title">{{item.title}}</div>
                            <div :style="{'color': item.color}">{{item.num}}</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Subnav from '@/components/Subnav/index.vue';
import { getcw, getch } from '@/utils/util';

export default {
  components: {
    Subnav,
  },
  data() {
    return {
      currpage: 0,
      leftsidebar: [
        {
          name: '特种设备',
          value: '0',
          size: '0 0',
          statesize: `0 ${getch(-107)}px`,
        },
        {
          name: '消防报警',
          value: '0',
          size: `${getcw(-116)}px 0 `,
          statesize: `${getcw(-116)}px  ${getch(-107)}px `,
        },
        {
          name: '煤气报警',
          value: '0',
          size: `${getcw(-229)}px 0 `,
          statesize: `${getcw(-229)}px  ${getch(-107)}px `,
        },
      ],
      baseInfo: {
        size: `${getcw(-452)}px ${getch(-50)}px`,
        title: '未处理监测报警情况',
      },
      dataList: [
        {
          title: '片区1',
          num: '0',
          color: '#00F7F7',
        },
        {
          title: '片区2',
          num: '0',
          color: '#41B4FD',
        },
        {
          title: '片区3',
          num: '0',
          color: '#1CF5CF',
        },
        {
          title: '片区4',
          num: '0',
          color: '#00F7F7',
        },
        {
          title: '片区5',
          num: '0',
          color: '#41B4FD',
        },
        {
          title: '片区6',
          num: '0',
          color: '#1CF5CF',
        },
        {
          title: '片区7',
          num: '0',
          color: '#00F7F7',
        },
        {
          title: '片区8',
          num: '0',
          color: '#41B4FD',
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.wrap-xiaofang {
  width: calc(100% - 24px);
  margin-left: cw(24);
  .wrapper {
    width: cw(641);
    height: ch(316);
    display: flex;
    padding: 0;
    background: url('../../../assets/image/di3.png') no-repeat;
    background-size: 100% 100%;
    .leftsidebar {
      width: cw(253);
      height: ch(93);
      &-box {
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('../../../assets/image/box-state.png') no-repeat;
        background-size: 100% 100%;
        height: ch(105);
        .leftsidebar-logo {
          width: cw(89);
          height: ch(89);
          .icon-logo {
            width: 100%;
            height: 100%;
            background: url('../../../assets/image/icon-group-1.png') no-repeat;
            background-size: cw(658) ch(197);
            display: inline-block;
            vertical-align: middle;
          }
        }
        .leftsidebar-title {
          width: cw(160);
          // height: ch(48);
          // line-height: ch(24);
          .title-name {
            font-size: cw(16);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
          }
          .title-value {
            margin-top: ch(9);
            font-size: cw(30);
            font-weight: 500;
            color: #30f2f7;
          }
        }
      }
      &-state {
        width: cw(253);
        height: ch(105);
        background: url('../../../assets/image/box-bg.png') no-repeat;
        background-size: 100% 100%;
      }
      &:hover {
        cursor: pointer;
      }
    }
    .rightsidebar {
      width: cw(389);
      padding: ch(26) 0 0 0;
      &-content {
        & > div {
          float: left;
          width: 33%;
          height: ch(90);
          text-align: center;
          & > div:first-child {
            font-size: ch(16);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          & > div:last-child {
            margin-top: ch(10);
            font-size: ch(34);
            font-weight: 500;
            color: #ff0000;
          }
        }
      }
    }
  }
}
</style>
