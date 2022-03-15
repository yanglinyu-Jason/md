<!--
 * @Author: lirui
 * @Date: 2022-02-07 16:16:09
 * @LastEditors: lirui
 * @LastEditTime: 2022-02-17 15:44:55
 * @Description: file content
 * @FilePath: \lego-cli-web\src\pages\DigitalSecurity\components\security-table.vue
-->
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
                    v-for="(item, index) in entryList"
                    :key="index"
                    style="width: 100%"
                >
                    <td width="25%">
                        <span>{{ item.shijian }}</span>
                    </td>
                    <td width="30%">
                        <span>{{ item.shangpumingcheng }}</span>
                    </td>
                    <td width="25%" style="color: #FF0000 ">
                        <span>{{ item.count }}</span>
                    </td>
                    <td width="25%" style="color: #FF9F22 ">
                        <span>{{ item.xiangxiweizhi }}</span>
                    </td>
                    <td width="25%" style="color: #F5F50E ">
                        <span>{{ item.second }}</span>
                    </td>
                    <td width="25%" style="color: #41B4FD ">
                        <span>{{ item.final }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      headerList: [
        {
          title: '分厂',
          width: '16%',
          color: '#00F7F7',
        },
        {
          title: '风险点总数',
          width: '28%',
          color: '#00F7F7',
        },
        {
          title: '重大风险',
          width: '27%',
          color: '#FF0000',
          borderColor: 'zdfx',
        },
        {
          title: '较高风险',
          width: '27%',
          color: '#FF9F22',
          borderColor: 'jgfx',
          background: '#3b3bef',
        },
        {
          title: '低风险',
          width: '21%',
          color: '#F5F50E',
          borderColor: 'dfx',
        },
        {
          title: '一般风险',
          width: '27%',
          color: '#41B4FD',
          borderColor: 'ybfx',
        },
      ],
      entryList: [
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
        {
          shijian: '动力厂',
          shangpumingcheng: '290',
          count: '1',
          xiangxiweizhi: '1',
          second: '2',
          final: '1',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
%table-style {
  width: 100%;
  height: ch(35);
  table-layout: fixed;
  tr {
    td {
      text-align: center;
      background-color: transparent;
      white-space: normal;
      word-break: break-all;
      overflow: hidden;
      color: #aaddff;
      font-size: ch(14);
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
          padding: ch(10) cw(8);
        }
        span.zdfx {
          background: url('~@/assets/image/icon-group.png') no-repeat;
          background-position: cw(-16) ch(-220);
          background-size: cw(934) ch(1022);
          display: inline-block;
          vertical-align: middle;
        }
        span.jgfx {
          background: url('~@/assets/image/icon-group.png') no-repeat;
          background-position: cw(-152) ch(-220);
          background-size: cw(934) ch(1022);
          display: inline-block;
          vertical-align: middle;
        }
        span.dfx {
          background: url('~@/assets/image/icon-group.png') no-repeat;
          background-position: cw(-16) ch(-295);
          background-size: cw(934) ch(1022);
          display: inline-block;
          vertical-align: middle;
        }
        span.ybfx {
          background: url('~@/assets/image/icon-group.png') no-repeat;
          background-position: cw(-152) ch(-295);
          background-size: cw(934) ch(1022);
          display: inline-block;
          vertical-align: middle;
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
        height: ch(25);
        text-align: center;
        &.title {
          text-overflow: ellipsis;
          display: inline-block;
        }
        span {
          display: inline-block;
          padding: ch(10) cw(5);
        }
      }
      border-bottom: ch(1) dashed #0092fe;
    }
  }
}
@media screen and ( max-width: 3799px ) {
  %table-style {
    tr {
      td {
        font-size: ch(12);
      }
    }
  }
}
</style>
