<template>
    <div class="security-box">
        <left-panel @showTable="handleTable" />
        <right-panel @showTable="handleTable" id="rightPanel" />
        <el-dialog :visible.sync="seeMoress" :modal-append-to-body="false">
            <div slot="title" class="header">
                <div class="header-logo"></div>
                <span class="header-name">{{ titleList[tableType] }}</span>
            </div>
            <see-mores v-if="seeMoress" :tableType="tableType"></see-mores>
        </el-dialog>
    </div>
</template>
<script>
import seeMores from './components/see-mores.vue';
import leftPanel from './components/left-panel.vue';
import rightPanel from './components/right-panel.vue';

export default {
  name: 'DigitalSecurity',
  components: {
    seeMores,
    leftPanel,
    rightPanel,
  },
  data() {
    return {
      seeMoress: false,
      tableType: 'whp',
      titleList: {
        fxdj: '未巡检风险点',
        whp: '危化品',
      },
    };
  },
  methods: {
    handleTable(type) {
      this.seeMoress = true;
      this.tableType = type;
    },
  },
};
</script>
<style lang="scss" scoped>
.security-box {
  width: 100%;
  height: 100%;
  padding: 0 cw(20) 0 cw(19);
  background: url('../../assets/image/security-bg.png') no-repeat;
  display: flex;
  justify-content: space-between;
  position: relative;
}
/deep/ .el-dialog {
  width: cw(1530);
  background: #08253d;
  border: ch(1) solid #00f7f7;
  border-top: none;
  pointer-events: all;
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 0;
  }
  .header {
    position: relative;
    height: ch(80);
    &-logo {
      background: url('../../assets/image/table_head.png') no-repeat;
      background-size: contain;
      width: 100%;
      height: ch(45);
      position: absolute;
      top: 0;
      left: 0;
    }
    &-name {
      position: absolute;
      top: ch(30);
      left: 0;
      background: url('../../assets/image/dialog_title.png') no-repeat;
      background-size: contain;
      width: 100%;
      padding-left: ch(45);
      font-size: ch(16);
      height: ch(50);
      line-height: ch(50);
      &::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: cw(20);
        height: ch(20);
        @include background(cw(-13), ch(-170));
        position: absolute;
        left: ch(15);
        top: ch(15);
      }
    }
  }
}
</style>
