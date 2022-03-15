<template>
    <div class="more-data">
        <div class="filter" ref="filter" hidden>
            <jsx-form
                ref="filterForm"
                :span="spanLength"
                size="small"
                :inline="true"
                label-width="cw(120)"
                :formItems="formItems"
                :formModel="formModel"
            ></jsx-form>
            <div class="filter-btns btn-box">
                <el-button
                    type="primary"
                    size="small"
                    @click="onFilterSearch"
                >查询</el-button>
                <el-button size="small" plain @click="onFilterReset">重置</el-button>
            </div>
        </div>
        <div class="filter-table">
            <jsx-table
                v-loading="loading"
                element-loading-background="rgba(0, 0, 0, 0.2)"
                element-loading-spinner="el-icon-loading"
                :showIndex="false"
                :className="['table-default medium']"
                :showPagination="tableData && tableData.length > 0"
                :columns="columns"
                :list="tableData"
                :current-page="pageIndex"
                :page-size="pageSize"
                :total="total"
                :page-sizes="[20,50,100]"
                @current-change="currentChanges"
                layout="total, ->, prev, pager, next"
            >
                <template v-slot:pingjiajibie="{ row }">
                    <div style="color: #00F8FF;">{{ row.pingjiajibie }}</div>
                </template>
            </jsx-table>
        </div>
    </div>
</template>

<script>
import JsxTable from '@/components/JsxTable'; // table组件
import JsxForm from '@/components/JsxForm';
import { hazardousColumns } from '@/pages/columns'; // 表格栏目

export default {
  name: 'DialogTable',
  components: {
    JsxTable,
    JsxForm,
  },
  props: {
    tableType: {
      type: String,
      default: 'whp',
    },
  },
  data() {
    return {
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
      columns: hazardousColumns,
      loading: false,
      pageIndex: 1, // 分页
      pageSize: 20, // 当前页面展示的条数
      total: 0, // 列表总数
      tableData: [], // 存放列表数据
    };
  },
  computed: {
    formItems() {
      let formItems = [];
      if (this.tableType === 'fxdj') {
        formItems = [
          {
            label: '所属厂区:',
            key: 'suoshuchangqu',
            type: 'select',
            props: {
              filterable: true,
              options: this.options,
            },
          },
          {
            label: '风险点等级:',
            key: 'fengxiandiandengji',
            type: 'select',
            props: {
              filterable: true,
              options: this.options,
            },
          },
          {
            label: '等级评价',
            type: 'select',
            key: 'dengjipingjia',
            props: {
              filterable: true,
              options: this.options,
            },
          },
          {
            label: '管控层级',
            type: 'select',
            key: 'guankongdengji',
            props: {
              filterable: true,
              options: this.options,
            },
          },
        ];
      }
      if (this.tableType === 'whp') {
        formItems = [
          {
            label: '化学名称:',
            key: 'chemistryName',
            type: 'input',
          },
          {
            label: '储存地点/厂部:',
            key: 'storePlace',
            type: 'select',
            props: {
              filterable: true,
              options: this.options,
            },
          },
          {
            label: '是否为重点监管危化品',
            type: 'radio',
            labelWidth: 'cw(180)',
            key: 'dangerousHaz',
            props: {
              options: [
                { label: '合格', value: '合格' },
                { label: '不合格', value: '不合格' },
              ],
            },
          },
        ];
      }
      return formItems;
    },
    formModel() {
      let formModel = {};
      if (this.tableType === 'whp') {
        formModel = {
          chemistryName: '',
          storePlace: '',
          dangerousHaz: '',
        };
      }
      if (this.tableType === 'fxdj') {
        formModel = {
          suoshuchangqu: '',
          fengxiandiandengji: '',
          dengjipingjia: '',
          guankongdengji: '',
        };
      }
      return formModel;
    },
    spanLength() {
      return this.tableType === 'fxdj' ? 6 : 8;
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.tableData = [
        {
          suoshuchangqu: '91371625771017783Y',
          guankongcengji: '3',
          fengxiandiandengji: '一般风险',
          pingjiajibie: '5级风险（一般）',
        },
        {
          suoshuchangqu: '913716005589122363',
          guankongcengji: '3',
          fengxiandiandengji: '一般风险',
          pingjiajibie: '5级风险（一般）',
        },
        {
          suoshuchangqu: '91371625310359502D',
          guankongcengji: '3',
          fengxiandiandengji: '一般风险',
          pingjiajibie: '5级风险（一般）',
        },
        {
          suoshuchangqu: '9137162509171979XM',
          guankongcengji: '3',
          fengxiandiandengji: '一般风险',
          pingjiajibie: '5级风险（一般）',
        },
        {
          suoshuchangqu: '91371625748991940U',
          guankongcengji: '3',
          fengxiandiandengji: '一般风险',
          pingjiajibie: '5级风险（一般）',
        },
        {
          suoshuchangqu: '91371625MA3TJAMQ2R',
          guankongcengji: '3',
          fengxiandiandengji: '一般风险',
          pingjiajibie: '5级风险（一般）',
        },
      ];
      this.total = 4;
    },
    onFilterSearch() {
      this.loadData();
    },
    onFilterReset() {
      this.$refs.filterForm.$children[0].resetFields();
      this.loadData();
    },
    currentChanges(val) {
      this.pageIndex = val;
      this.loadData();
    },
  },
};
</script>
<style lang="scss">
.more-data {
  .filter {
    display: flex;
    background-color: #08253d;
    position: relative;
    align-items: center;
    padding-left: cw(32);
    .el-form {
      flex: 1;
      /deep/ .el-form-item--small.el-form-item {
        margin-bottom: 0 !important;
        padding: ch(5) 0;
      }
      /deep/ .el-form-item--mini.el-form-item,
      /deep/ .el-form-item--small.el-form-item {
        margin-bottom: 0 !important;
      }
    }
    &-btns {
      width: cw(160);
      flex-shrink: 0;
      margin-bottom: ch(18);
      flex: 0 0 15%;
      .el-button {
        border: 1px solid #5f81da;
        line-height: ch(25);
        width: cw(80);
        background: rgba(18, 60, 91, 0.8);
        color: #00f7f7;
        padding: ch(3) ch(2);
      }
    }
    &-table {
      padding: 0 cw(12) ch(30);
    }
  }
}
</style>
<style lang="scss" scoped>
/deep/.el-input {
  width: cw(161);
}
/deep/ .el-radio__input.is-checked .el-radio__inner {
  border-color: #23fffc;
  background: #23fffc;
}
/deep/ .el-radio__input.is-checked + .el-radio__label {
  color: #23fffc;
}
/deep/ .el-radio__label,
/deep/ .el-radio__inner {
  color: #168e99;
}
/deep/ .el-table {
  background-color: transparent !important;
  border: 1px solid #049898;
}
/deep/.el-table th {
  background-color: transparent !important;
}
/deep/.el-table tr {
  background-color: transparent !important;
}
/deep/.el-table__header-wrapper {
  background: rgba(1, 165, 165, 0.5);
  color: #00f7f7;
  height: ch(50);
  line-height: ch(50);
  font-size: ch(16);
}
/deep/.el-table .has-gutter .el-table__cell {
  padding: 0;
}
/deep/ .el-pagination__total {
  color: #9fceff;
}
/deep/ .el-pagination button:disabled {
  color: #9fceff !important;
  background-color: transparent !important;
  cursor: not-allowed;
}

/deep/ .el-pager li.active {
  color: #00ffff !important;
  cursor: default;
}

/deep/ .el-pager li {
  color: #9fceff !important;
  background: transparent !important;
}

/deep/ .el-pagination {
  color: #9fceff;
}

/deep/ .el-pagination .btn-next,
/deep/ .el-pagination .btn-prev {
  color: #9fceff !important;
  background-color: transparent !important;
}

/deep/ .el-pager li.btn-quicknext,
/deep/ .el-pager li.btn-quickprev {
  color: #9fceff !important;
}
</style>
