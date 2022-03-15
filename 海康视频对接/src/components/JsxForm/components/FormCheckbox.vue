<template>
  <div class="form-checkbox">
    <el-checkbox
      v-if="showAll"
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <el-checkbox-group
      v-bind="$attrs"
      v-on="$listeners"
      @change="handleCheckSingleChange"
    >
      <el-checkbox
        v-for="item in options"
        :key="item[vValue]"
        :label="item[vValue]"
        v-bind="item.props"
        v-on="item.on"
        >{{ item[vLabel] }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>
<script>
import { CheckboxGroup, Checkbox } from 'element-ui';

export default {
  components: {
    ElCheckboxGroup: CheckboxGroup,
    ElCheckbox: Checkbox,
  },
  props: {
    options: {
      type: Array,
    },
    vLabel: {
      type: String,
      default: 'label',
    },
    vValue: {
      type: String,
      default: 'value',
    },
    showAll: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      checkAll: false,
      isIndeterminate: true,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.isIndeterminate = false;
      this.$emit(
        'input',
        val ? this.options.map(item => item[this.vValue]) : [],
      );
    },
    handleCheckSingleChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length;
    },
  },
};
</script>
<style scoped>
.form-checkbox::after {
  display: block;
  content: '';
  clear: both;
}
.form-checkbox .el-checkbox {
  float: left;
  margin-right: 10px;
}
</style>
