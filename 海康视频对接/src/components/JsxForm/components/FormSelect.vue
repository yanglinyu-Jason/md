<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <el-option
      v-for="item in options"
      :key="item[vValue]"
      :label="item[vLabel]"
      :value="item[vValue]"
    />
  </el-select>
</template>
<script>
import { Select, Option } from 'element-ui';

export default {
  components: {
    ElSelect: Select,
    ElOption: Option,
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
  },
};
</script>
