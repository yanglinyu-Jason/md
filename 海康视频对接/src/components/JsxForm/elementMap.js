export default {
  input: {
    // 对应element组件
    tag: 'el-input',
    // element组件默认属性
    props: {
      clearable: true,
      placeholder: '请输入',
    },
  },
  inputNumber: { tag: 'el-input-number' },
  select: {
    tag: 'form-select',
    // element组件默认属性
    props: {
      clearable: true,
      style: { width: '100%' },
    },
  },
  radio: { tag: 'form-radio' },
  checkbox: { tag: 'el-checkbox' },
  checkboxGroup: { tag: 'form-checkbox' },
  cascader: { tag: 'el-cascader' },
  switch: { tag: 'el-switch' },
  slider: { tag: 'el-slider' },
  timePicker: { tag: 'el-time-picker' },
  timeSelect: { tag: 'el-time-select' },
  datePicker: { tag: 'el-date-picker' },
  upload: { tag: 'el-upload' },
  rate: { tag: 'el-rate' },
  colorPicker: { tag: 'el-color-picker' },
  transfer: { tag: 'el-transfer' },
};
