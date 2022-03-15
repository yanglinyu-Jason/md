<template>
    <div class="left-pannel">
        <div class="left-pannel-first">
            <div class="left-pannel-first-top">
                <com-box :baseInfo="changqufengxiandengji">
                    <div class="containers">
                        <span class="columns-title">
                            厂区风险等级
                            <div class="selct-xuanzhe">
                                <el-select
                                    size="small"
                                    v-model="value"
                                    placeholder="近6个月"
                                    popper-class="select-popper"
                                >
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </div>
                        </span>
                        <div class="columns-shop">
                            <security-charts :entry-list="proProtion" />
                        </div>
                    </div>
                </com-box>
            </div>
            <div class="left-pannel-first-middle">
                <com-box :baseInfo="yinhuanpaichazhili">
                    <div class="containers">
                        <span class="columns-title" @click="$emit('showTable', 'fxdj')">
                            隐患整改情况
                            <div class="selct-xuanzhe">
                                <el-select
                                    size="small"
                                    v-model="value"
                                    placeholder="近6个月"
                                    popper-class="select-popper"
                                >
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </div>
                        </span>
                        <div class="columns-shop">
                            <div>
                                <security-ch />
                            </div>
                            <div>
                                <section>
                                    <span>
                                        35098
                                        <span title="排查隐患总数">排查隐患总数</span>
                                    </span>
                                </section>
                            </div>
                        </div>
                    </div>
                </com-box>
            </div>
            <div class="left-pannel-first-bottom">
                <com-box :baseInfo="zhongdaweixianyuan">
                    <div class="containers">
                        <div></div>
                        <span>转炉煤气柜</span>
                        <section>
                            <div>四级</div>
                            <div>重大危险源</div>
                        </section>
                        <section>
                            <div>80000m³</div>
                            <div>最大储量</div>
                        </section>
                    </div>
                    <div class="containers">
                        <div></div>
                        <span>高炉煤气柜</span>
                        <section>
                            <div>三级</div>
                            <div>重大危险源</div>
                        </section>
                        <section>
                            <div>150000m³</div>
                            <div>最大储量</div>
                        </section>
                    </div>
                </com-box>
            </div>
        </div>
        <div class="left-pannel-second">
            <div class="left-pannel-first-top">
                <com-box :baseInfo="anquanzhishuyujing">
                    <div class="containers">
                        <div class="columns-top">
                            <div class="selct-xuanzhe">
                                <el-select
                                    size="small"
                                    v-model="value"
                                    placeholder="近6个月"
                                    popper-class="select-popper"
                                >
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </div>
                            <div class="safty-value">
                              今日安全预警值：<span>20</span>
                            </div>
                        </div>
                        <div class="columns-shop">
                            <security-safety />
                        </div>
                    </div>
                </com-box>
            </div>
            <div class="left-pannel-first-middle">
                <com-box :baseInfo="yinhuanpaichazhili">
                    <div class="containers">
                        <div class="columns-shop">
                            <div class="bottom-cont">
                                <template
                                    v-for="item in weizhenggaiyinhuanshulist"
                                >
                                    <div :key="item.title">
                                        <div
                                            :style="{'color': item.color}"
                                        >{{item.num}}</div>
                                        <div :title="item.title">{{item.title}}</div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </com-box>
            </div>
            <div class="left-pannel-first-middle bottom">
                <com-box :baseInfo="weixunjianfengxiandian">
                    <div class="containers">
                        <div class="columns-shop">
                            <div class="bottom-cont">
                                <template
                                    v-for="item in weixunjianfengxiandianlist"
                                >
                                    <div :key="item.title">
                                        <div
                                            :style="{'color': item.color}"
                                        >{{item.num}}</div>
                                        <div :title="item.title">{{item.title}}</div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </com-box>
            </div>
        </div>
    </div>
</template>
<script>
import ComBox from '@/components/ComBox/Index.vue';
import securityCharts from './security-charts.vue';
import securityCh from './security-ch.vue';
import securitySafety from './security-safety.vue';
import { getcw, getch } from '../../../utils/util';

export default {
  name: 'leftPanel',
  components: {
    ComBox,
    securityCharts,
    securityCh,
    securitySafety,
  },
  data() {
    return {
      changqufengxiandengji: {
        title: '风险分级管控',
        iconUrl: require('../../../assets/image/icon-head.png'),
        size: `${getcw(-65)}px ${getch(-117)}px`,
      },
      yinhuanpaichazhili: {
        title: '隐患排查治理',
        iconUrl: require('../../../assets/image/icon-head.png'),
        size: `${getcw(-65)}px ${getch(-117)}px`,
      },
      zhongdaweixianyuan: {
        title: '重大危险源',
        iconUrl: require('../../../assets/image/icon-head.png'),
        size: `${getcw(-65)}px ${getch(-117)}px`,
      },
      anquanzhishuyujing: {
        title: '安全指数预警',
        iconUrl: require('../../../assets/image/icon-head.png'),
        size: `${getcw(-124)}px ${getch(-116)}px`,
      },
      weixunjianfengxiandian: {
        title: '未巡检风险点',
        iconUrl: require('../../../assets/image/icon-head.png'),
        size: `${getcw(-124)}px ${getch(-116)}px`,
      },
      proProtion: [
        {
          index: '排名',
          name: '分项名称',
          value: '用电量',
          change: '环比',
        },
        { name: '商铺', value: 1341.7, ratio: '50.72%' },
        { name: '照明', value: 1218.6, ratio: '46.06%' },
        { name: '空调', value: 85.1, ratio: '3.22%' },
      ],
      weizhenggaiyinhuanshulist: [
        {
          title: '片区1',
          num: '6',
          color: '#EFA043',
        },
        {
          title: '片区2',
          num: '4',
          color: '#EFA043',
        },
        {
          title: '片区3',
          num: '3',
          color: '#EFA043',
        },
        {
          title: '片区4',
          num: '3',
          color: '#EFA043',
        },
        {
          title: '片区5',
          num: '1',
          color: '#EFA043',
        },
        {
          title: '片区6',
          num: '8',
          color: '#EFA043',
        },
        {
          title: '片区7',
          num: '0',
          color: '#EFA043',
        },
        {
          title: '片区8',
          num: '0',
          color: '#EFA043',
        },
      ],
      weixunjianfengxiandianlist: [
        {
          title: '片区1',
          num: '0',
          color: '#F5F50E',
        },
        {
          title: '片区2',
          num: '0',
          color: '#F5F50E',
        },
        {
          title: '片区3',
          num: '0',
          color: '#F5F50E',
        },
        {
          title: '片区4',
          num: '0',
          color: '#F5F50E',
        },
        {
          title: '片区5',
          num: '0',
          color: '#F5F50E',
        },
        {
          title: '片区6',
          num: '0',
          color: '#F5F50E',
        },
        {
          title: '片区7',
          num: '0',
          color: '#F5F50E',
        },
        {
          title: '片区8',
          num: '0',
          color: '#F5F50E',
        },
      ],
      options: [
        {
          value: '全部分厂',
          label: '全部分厂',
        },
      ],
      value: '全部分厂',
    };
  },
};
</script>
<style lang="scss" scoped>
.left-pannel {
  display: flex;
  justify-content: space-between;
  pointer-events: all;
  &-first,
  &-second {
    margin-left: cw(19);
    &-top {
      /deep/ .wrap {
        width: cw(521);
        height: ch(360);
        margin-bottom: ch(13);
        .wrapper {
          height: ch(309);
          padding-top: ch(10);
          padding-right: cw(10);
          padding-bottom: ch(10);
        }
      }
      .containers {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .columns {
          &-top {
            width: 100%;
            height: ch(110);
            font-size: ch(18);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #00f7f7;
            position: relative;
            padding-left: cw(25);
            .selct-xuanzhe {
              position: absolute;
              top: 0;
              right: 0;
              width: cw(130);
              .el-select {
                margin-left: ch(10);
              }
            }
            .safty-value {
              width: cw(250);
              position: absolute;
              bottom: 0;
              left: 50%;
              margin-left: cw(-125);
              line-height: ch(51);
              background: rgba(6, 30, 55, 0);
              border: 1px solid #01FFFE;
              border-radius: ch(8);
              font-size: ch(20);
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #FFF;
              text-align: center;
              box-shadow: inset 0 0 15px #5da3a4;
              span {
                font-size: ch(36);
                color: #1fd365;
              }
            }
          }
          &-title {
            display: inline-block;
            width: 100%;
            height: ch(32);
            line-height: ch(32);
            font-size: ch(18);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #00f7f7;
            position: relative;
            padding-left: cw(25);
            &::before {
              content: '';
              display: inline-block;
              vertical-align: middle;
              width: cw(20);
              height: ch(20);
              @include background(cw(-13), ch(-170));
              position: absolute;
              left: 0;
            }
            .selct-xuanzhe {
              position: absolute;
              top: 0;
              right: 0;
              width: cw(130);
              .el-select {
                margin-left: ch(10);
              }
            }
          }
          &-shop {
            margin: ch(10) 0;
          }
        }
      }
    }
    &-middle {
      /deep/ .wrap {
        width: cw(521);
        height: ch(302);
        margin-bottom: ch(13);
        .wrapper {
          height: ch(251);
          padding-top: ch(10);
          padding-right: cw(10);
          padding-bottom: ch(10);
        }
      }
      .containers {
        width: 100%;
        overflow: hidden;
        .columns {
          width: 100%;
          &-title {
            width: 100%;
            height: ch(30);
            font-size: ch(18);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #00f7f7;
            position: relative;
            padding-left: cw(25);
            display: flex;
            align-items: center;
            &::before {
              content: '';
              display: inline-block;
              vertical-align: middle;
              width: cw(20);
              height: ch(20);
              @include background(cw(-13), ch(-170));
              position: absolute;
              left: 0;
            }
            &::after {
              content: '';
              display: inline-block;
              vertical-align: middle;
              width: cw(20);
              height: ch(20);
              @include background(cw(-120), ch(-167));
              display: inline-block;
              vertical-align: middle;
              position: absolute;
              right: cw(5);
              top: 0;
              cursor: pointer;
            }
            .selct-xuanzhe {
              position: absolute;
              top: 0;
              right: cw(35);
              width: cw(130);
              .el-select {
                margin-left: ch(10);
              }
            }
          }
          &-shop {
            width: 100%;
            background-size: 100% 100%;
            position: relative;
            display: flex;
            align-content: center;
            overflow: hidden;
            & > div:first-child {
              width: 40%;
            }
            & > div:last-child {
              width: 60%;
              section {
                vertical-align: middle;
                width: cw(300);
                height: ch(50);
                @include background(cw(-5), ch(-965));
                vertical-align: middle;
                margin-top: ch(90);
                line-height: ch(50);
                position: relative;
                display: flex;
                span {
                  font-size: ch(20);
                  font-weight: 400;
                  color: #23fffc;
                  display: inline-block;
                  margin-left: cw(30);
                  span {
                    font-size: ch(16);
                    font-weight: 400;
                    color: #eff0f1;
                    margin-left: cw(10);
                    width: cw(85);
                    white-space: nowrap;
                  }
                }
              }
            }
            & > .bottom-cont {
              width: 100% !important;
              padding: ch(40) cw(9) ch(10);
              overflow: hidden;
              & > div {
                float: left;
                width: 25%;
                height: ch(90);
                text-align: center;
                & > div:first-child {
                  font-size: ch(34);
                  font-weight: 500;
                  color: #ff0000;
                }
                & > div:last-child {
                  margin-top: ch(10);
                  font-size: ch(16);
                  font-family: Microsoft YaHei;
                  font-weight: 400;
                  color: #66b7da;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
    }
    &-bottom {
      /deep/ .wrap {
        width: cw(521);
        height: ch(288);
        margin-bottom: ch(20) !important;
        .wrapper {
          height: ch(237) !important;
          padding: 0;
        }
      }
      .containers {
        height: ch(95);
        width: cw(479);
        background: url('../../../assets/image/dangerous-com.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        margin: ch(20) cw(20) 0;
        & > div {
          position: absolute;
          top: 0;
          left: 0;
          width: ch(93);
          height: ch(93);
          @include background(cw(0), ch(-826));
        }
        span {
          display: inline-block;
          width: cw(80);
          position: absolute;
          left: 0;
          bottom: ch(28);
          text-align: center;
          font-size: ch(12);
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        & > section {
          position: absolute;
          right: cw(240);
          top: ch(25);
          font-size: ch(14);
          width: cw(130);
          & > div:first-child {
            font-size: ch(24);
            font-weight: 500;
            color: #00f7f7;
          }
          & > div:last-child {
            font-size: ch(12);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
            margin-top: ch(10);
            padding-left: cw(2);
          }
        }
        & > section:last-child {
          right: cw(40);
        }
      }
      .containers:last-child {
        margin-bottom: ch(20);
        margin-top: ch(15);
        background: url('../../../assets/image/dangerous-com.png') no-repeat;
        background-size: 100% 100%;
        & > div {
          position: absolute;
          top: 0;
          left: 0;
          width: ch(93);
          height: ch(93);
          @include background(cw(-142), ch(-826));
        }
      }
    }
  }
  &-second {
    & > .bottom {
      /deep/ .wrap {
        width: cw(521);
        height: ch(288);
        margin-bottom: ch(20) !important;
        .wrapper {
          height: ch(237) !important;
          padding: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 4683px) {
  .left-pannel {
    &-first,
    &-second {
      .containers {
        .columns {
          &-shop {
            .top-cont {
              & > div {
                & > span {
                  background-size: cw(1160) ch(1022);
                  left: 0;
                }
              }
              & > div:last-child {
                & > span {
                  background-size: cw(1100) ch(1022);
                  background-position: -3.5vw -34.00735vh;
                  left: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
