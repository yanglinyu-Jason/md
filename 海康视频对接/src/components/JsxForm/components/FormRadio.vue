<template>
  <el-radio-group v-bind="$attrs" v-on="$listeners">
    <el-radio
      v-for="item in options"
      :key="item[vValue]"
      :label="item[vValue]"
      v-bind="item.props"
      v-on="item.on"
      >{{ item[vLabel] }}</el-radio
    >
  </el-radio-group>
</template>
<script>
import { RadioGroup, Radio } from 'element-ui';

export default {
  components: {
    ElRadioGroup: RadioGroup,
    ElRadio: Radio,
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
