<template>
    <div class="alarm-table-Panel">
        <div class="expand">
            <div class="expand-header">
                <div class="expand-header-title">未处理监测设备报警：{{tableData.length}}</div>
                <div class="toggle">收起</div>
            </div>
            <div class="expand-main">
              <jsx-table
                :show-index="true"
                :show-pagination="false"
                :columns="columns"
                :list="tableData"
            />
            </div>
        </div>
    </div>
</template>
<script>
import JsxTable from '@/components/JsxTable';

export default {
  components: {
    JsxTable,
  },
  data() {
    return {
      columns: [
        { label: '消防主机', prop: 'zhuji' },
        { label: '报警传感器', prop: 'chuanganqi' },
        { label: '传感器类型', prop: 'chuanganqileixing' },
        { label: '监测报警值', prop: 'baojingzhi' },
        { label: '报警界限值', prop: 'jiexianzhi' },
        {
          label: '报警类型',
          prop: 'baojingleixing',
          render: (h, params) => {
            console.log(params);
            const text = params.row.baojingleixing;
            if (text === '火警') {
              return <span style="color: #F2A243;">{text}</span>;
            }
            return <span style="color: #E5382A;">{text}</span>;
          },
        },
        {
          label: '操作',
          render: () => <span class="red-btn">消除报警</span>,
        },
      ],
      tableData: [
        {
          zhuji: '21-仓储部回路',
          chuanganqi: '21_1_20(模块仓库_声光)',
          chuanganqileixing: '声光',
          baojingzhi: '2.2',
          jiexianzhi: '2',
          baojingleixing: '故障',
        },
        {
          zhuji: '21-仓储部回路',
          chuanganqi: '21_1_20(模块仓库_声光)',
          chuanganqileixing: '声光',
          baojingzhi: '2.2',
          jiexianzhi: '2',
          baojingleixing: '火警',
        },
        {
          zhuji: '21-仓储部回路',
          chuanganqi: '21_1_20(模块仓库_声光)',
          chuanganqileixing: '声光',
          baojingzhi: '2.2',
          jiexianzhi: '2',
          baojingleixing: '故障',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.alarm-table-Panel {
  position: absolute;
  left: 50%;
  bottom: 20px;
  z-index: 9;
  transform: translateX(-50%);
  width: cw(2000);
  .expand {
    &-header {
      background: url('~@/assets/image/expand-header-bg.png') no-repeat 100%
        100%;
      background-size: 100% 100%;
      width: 100%;
      height: ch(45);
      position: relative;
      &-title {
        font-size: cw(18);
        font-weight: bold;
        color: #f43524;
        line-height: ch(45);
        padding: 0 cw(10);
        &::before {
          content: '';
          width: cw(24);
          height: ch(24);
          @include background(cw(-450), ch(-92));
        }
      }
      .toggle {
        position: absolute;
        top: ch(-15);
        right: 0;
        width: cw(80);
        height: ch(30);
        line-height: ch(30);
        background: rgba(20, 107, 214, 0.6);
        border-radius: 10px 10px 0px 0px;
        color: #00f7f7;
        font-size: cw(16);
        text-align: center;
        cursor: pointer;
        &::after {
          content: '';
          width: cw(12);
          height: ch(12);
          @include background(cw(-186), ch(-170));
          transform: rotate(90deg);
          margin-left: cw(5);
        }
      }
    }
    &-main {
      width: 100%;
      padding: ch(5) cw(10);
      background-color: rgba(6, 36, 63, 0.7);
      margin-top: ch(10);
      .red-btn {
        display: inline-block;
        vertical-align: middle;
        padding: ch(5) cw(10);
        line-height: normal;
        background:rgba(136, 53, 64, 0.51) ;
        border: 1px solid #E5382A;
        border-radius: 6px;
        cursor: pointer;
      }
    }
  }
}
</style>
