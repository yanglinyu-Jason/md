<template>
    <div class="right-pannel">
        <div class="left-part">
            <div class="left-part-first">
                <com-box :baseInfo="historyInfo">
                    <div class="time-deadline">
                        <template v-for="(time, index) in timeList">
                            <div class="time-deadline-info" :key="index">{{time}}</div>
                        </template>
                    </div>
                    <div class="history-list">
                        <template v-for="item in historyList">
                            <div class="history-list-item" :key="item.title">
                                <div></div>
                                <div>
                                    <div :title="item.title">{{item.title}}</div>
                                    <div>{{item.time}}</div>
                                </div>
                            </div>
                        </template>
                    </div>
                </com-box>
            </div>
            <div class="left-part-second">
                <com-box :baseInfo="xiaofangbaojingInfo">
                    <security-tablerp :list="xiaofangbaojingList"/>
                </com-box>
            </div>
            <div class="left-part-third">
                <com-box :baseInfo="xiaofangmeiqiInfo">
                    <security-tablerp :list="xiaofangmeiqiList"/>
                </com-box>
            </div>
        </div>
        <div class="right-part">
            <security-md />
            <security-fireequipent />
        </div>
    </div>
</template>
<script>
import ComBox from '@/components/ComBox/Index.vue';
import securityTablerp from './security-tablerp.vue';
import securityFireequipent from './security-fireequipent.vue';
import securityMd from './security-md.vue';
import { getcw, getch } from '../../../utils/util';

export default {
  name: 'rightPanel',
  components: {
    ComBox,
    securityTablerp,
    securityMd,
    securityFireequipent,
  },
  data() {
    return {
      warningColorIndex: 1,
      seeMoress: false,
      historyInfo: {
        title: '历史上的今天',
        iconUrl: require('../../../assets/image/icon-head.png'),
        size: `${getcw(-182)}px ${getch(-115)}px`,
      },
      xiaofangbaojingInfo: {
        title: '消防报警',
        iconUrl: require('../../../assets/image/icon-head.png'),
        size: `${getcw(-244)}px ${getch(-114)}px`,
      },
      xiaofangmeiqiInfo: {
        title: '消防煤气',
        iconUrl: require('../../../assets/image/icon-head.png'),
        size: `${getcw(-244)}px ${getch(-114)}px`,
      },
      weichulijiancebaojingqingkuangInfo: {
        title: '消防煤气',
        iconUrl: require('../../../assets/image/icon-head.png'),
        size: `${getcw(-244)}px ${getch(-114)}px`,
      },
      timeList: ['2', '0', '2', '2', '', '0', '3'],
      historyList: [
        {
          title: '江苏省盐城市响水县陈家港镇化工园区内江苏天嘉宜化工有限公司化学储罐发生爆炸事故，并波及周边16家企业。事故共造成78人死亡、76人重伤，640人住院治疗，直接经济损失19.86亿元',
          time: '2019年3月21日',
        },
        {
          title: '河北省唐山市华熠实业股份有限公司组织承包商迁安市天良建筑机电安装工程有限公司在苯加氢车间进行污水罐检维修作业过程中，发生一起燃爆事故，造成4人死亡、1人受伤。',
          time: '2018年3月1日',
        },
      ],
      options: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: '选项2',
          label: '近6个月',
        },
      ],
      value: '全部',
      xiaofangbaojingList: [
        {
          suozaifenchan: '1_1_80(循环水泵房_讯响)',
          shijian: '已处理',
          shangpumingcheng: '2022-03-08 10:17:17',
          count: '实时数据',
          xiangxiweizhi: '-',
        },
        {
          suozaifenchan: '1_1_114(除盐水站_手报)',
          shijian: '已处理',
          shangpumingcheng: '2022-03-08 10:17:17',
          count: '实时数据',
          xiangxiweizhi: '-',
        },
        {
          suozaifenchan: '1_1_78(高低压配电室_讯响)',
          shijian: '已处理',
          shangpumingcheng: '2022-03-08 08:14:50',
          count: '实时数据',
          xiangxiweizhi: '-',
        },
        {
          suozaifenchan: '1_1_78(高低压配电室_讯响)',
          shijian: '已处理',
          shangpumingcheng: '2022-03-08 10:15:02',
          count: '实时数据',
          xiangxiweizhi: '-',
        },
      ],
      xiaofangmeiqiList: [
        {
          suozaifenchan: '2-1-1（动力厂）',
          shijian: '已处理',
          shangpumingcheng: '2022-03-08 11:16:17',
          count: '实时数据',
          xiangxiweizhi: '-',
        },
        {
          suozaifenchan: '2-1-2（动力厂）',
          shijian: '已处理',
          shangpumingcheng: '2022-03-08 12:17:13',
          count: '实时数据',
          xiangxiweizhi: '-',
        },
        {
          suozaifenchan: '2-1-3（动力厂）',
          shijian: '已处理',
          shangpumingcheng: '2022-03-08 13:00:12',
          count: '实时数据',
          xiangxiweizhi: '-',
        },
        {
          suozaifenchan: '2-1-4（动力厂）',
          shijian: '已处理',
          shangpumingcheng: '2022-03-08 15:01:07',
          count: '实时数据',
          xiangxiweizhi: '-',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.right-pannel {
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: cw(20);
  pointer-events: all;
  .left-part {
    &-first,
    &-second,
    &-third {
      /deep/ .wrap {
        width: cw(540);
        height: ch(333);
        margin-bottom: ch(14) !important;
        .wrapper {
          height: ch(281) !important;
          padding: 0;
          display: block;
        }
      }
      .time-deadline {
        height: ch(70);
        padding: ch(10) cw(60) 0;
        &-info {
          width: cw(55);
          height: cw(55);
          margin: 0;
          border-radius: ch(10);
          background: linear-gradient(to bottom, #061e37, #00509f);
          margin-left: cw(10);
          font-size: cw(36);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #00f7f7;
          line-height: cw(55);
          text-align: center;
          box-shadow: inset 0 0 ch(10) #00f7f7;
          float: left;
        }
        &-info:nth-of-type(5) {
          width: cw(20);
          height: ch(4);
          background: #03e4f4;
          border-radius: ch(2);
          float: left;
          margin-left: cw(10);
          margin-top: ch(28);
          box-shadow: none;
        }
      }
      .history-list {
        padding: ch(10) cw(19) 0;
        overflow: hidden;
        &-item {
          overflow: hidden;
          margin-bottom: ch(31);
          & > div:first-child {
            width: cw(18);
            height: ch(18);
            background: url('../../../assets/image/alarm.png') no-repeat;
            float: left;
          }
          & > div:last-child {
            float: left;
            width: cw(450);
            margin-left: cw(9);
            div:first-child {
              font-size: ch(16);
              line-height: ch(20);
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #fff;
              @include ellipsisMulti(2);
            }
            div:last-child {
              font-size: ch(14);
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #41b4fd;
              margin-top: ch(5);
            }
          }
        }
      }
    }
    &-second {
      /deep/ .wrap {
        width: cw(540);
        height: ch(303);
        .wrapper {
          height: ch(251) !important;
          padding-top: ch(10);
          padding-bottom: 0;
        }
      }
    }
    &-third {
      /deep/ .wrap {
        width: cw(540);
        height: ch(312);
        .wrapper {
          height: ch(260) !important;
          padding-top: ch(10);
          padding-bottom: 0;
        }
      }
    }
  }
  .right-part {
    /deep/ .wrap {
        width: cw(540);
        height: ch(371);
        margin: ch(68) 0 0 cw(19);
        .wrapper {
          height: ch(316) !important;
          padding-top: ch(10);
          padding-bottom: 0;
        }
      }
  }
}
@media screen and (max-width: 4683px) {
  .right-pannel {
    .left-part {
      &-first {
        .containers {
          & > div {
            background-size: cw(1160) ch(1022);
          }
          & > span {
            width: 2.1vw;
          }
          & > section {
            right: cw(200);
          }
          & > section:last-child {
            right: cw(20);
          }
        }
        .containers:last-child {
          & > div {
            background-position: -3.51941vw -75.91912vh;
            background-size: cw(1160) ch(1022);
          }
          & > span {
            width: 2.5vw;
          }
        }
      }
    }
    /deep/.el-input {
      width: cw(117);
      input {
        height: ch(30);
        line-height: ch(30);
      }
    }
  }
}
</style>
