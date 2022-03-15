<template>
    <div class="table">
        <table border="0" cellpadding="0" cellspacing="0" class="table-header">
            <tbody>
                <tr class="header-style" style="width: 100%">
                    <template v-for="item in headerList">
                        <td :width="item.width" :key="item.title">
                            <span
                                :style="{ 'color': item.color, 'background': item.background,}"
                                v-if="!item.borderColor"
                            >{{item.title}}</span>
                            <span
                                :style="{ 'color': item.color, }"
                                :class="item.borderColor"
                                v-else
                            >{{item.title}}</span>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="table-body">
            <tbody>
                <tr
                    v-for="(item, index) in list"
                    :key="index"
                    style="width: 100%"
                >
                    <td width="20%">
                        <span>{{ item.suozaifenchan }}</span>
                    </td>
                    <td
                        width="20%"
                        :style="{'color': countColor[item.shijian]}"
                    >
                        <span>{{ item.shijian }}</span>
                    </td>
                    <td width="20%">
                        <span>{{ item.shangpumingcheng }}</span>
                    </td>
                    <td width="20%" :style="{'color': countColor[item.count]}">
                        <span>{{ item.count }}</span>
                    </td>
                    <td width="20%">
                        <span>
                            <a
                                :class="{'active': xiangxiweizhiColor[item.xiangxiweizhi]}"
                            >{{ item.xiangxiweizhi }}</a>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      headerList: [
        {
          title: '报警点位',
          width: '20%',
          color: '#00F7F7',
        },
        {
          title: '处理状态',
          width: '20%',
          color: '#00F7F7',
        },
        {
          title: '报警时间',
          width: '20%',
          color: '#00F7F7',
          borderColor: 'zdfx',
        },
        {
          title: '操作',
          width: '20%',
          color: '#00F7F7',
        },
        {
          title: '取消报警',
          width: '20%',
          color: '#00F7F7',
        },
      ],
      countColor: {
        未处理: '#c10b17',
        处理中: '#f5f50e',
        已处理: '#328fcb',
      },
      xiangxiweizhiColor: {
        消除报警: '#E5382A',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
%table-style {
  width: 100%;
  height: ch(44);
  table-layout: fixed;
  tr {
    td {
      text-align: center;
      background-color: transparent;
      white-space: normal;
      word-break: break-all;
      overflow: hidden;
      color: #aaddff;
      font-size: ch(16);
    }
  }
}
.table {
  height: 100%;
  .table-header {
    @extend %table-style;
    .header-style {
      background: url('../../../assets/image/table-bg.png') no-repeat;
      box-sizing: border-box;
      height: ch(60);
      td {
        color: #00c0ff;
        span {
          display: inline-block;
        }
      }
      td:nth-of-type(1),
      td:nth-of-type(2) {
        span {
          padding: 0;
          border: 0;
        }
      }
      td:nth-of-type(1) {
        span {
          padding-left: cw(8);
        }
      }
    }
  }
  .table-body {
    height: auto;
    @extend %table-style;
    tr {
      td {
        text-align: center;
        &.title {
          text-overflow: ellipsis;
          display: inline-block;
        }
        span {
          display: inline-block;
          padding: ch(10) cw(5);
          height: ch(44);
          width: cw(102);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      td:last-child {
        span {
          a.active {
            color: #c3333b;
            border: 1px solid rgb(229, 56, 42);
            padding: ch(5) cw(10);
            border-radius: ch(5);
            line-height: ch(25);
            box-shadow: inset 0 0 0.91912vh #6f2c3f;
          }
          a {
            color: #fff;
          }
        }
      }
      border-bottom: ch(1) dashed #0092fe;
    }
    tr:last-child {
      border: none;
    }
  }
}
@media screen and (max-width: 4683px) {
  %table-style {
    tr {
      td {
        font-size: ch(12);
      }
    }
  }
}
</style>
