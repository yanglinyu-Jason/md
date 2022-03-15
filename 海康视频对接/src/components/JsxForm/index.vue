<template>
    <el-form :model="formModel" :rules="rules" v-bind="$attrs" v-on="$listeners">
      <el-row>
        <el-col v-for="(item, index) in configItems" :span="item.span || span" :key="`${item.key}_${index}`">
          <el-form-item :label="item.label" :prop="item.key" :label-width="item.labelWidth">
              <user-slot v-if="item.render" :render="item.render" :data="data" />
              <component
                  v-else-if="item.tag"
                  :is="item.tag"
                  v-model="formModel[item.key]"
                  v-bind="item.props"
                  v-on="item.on"
              ></component>
              <el-tooltip
                  v-else
                  :disabled="!formModel[item.key] || String(formModel[item.key]).length < 30"
                  placement="top"
                  :content="String(formModel[item.key])"
              >
                  <span
                      class="basic-info-content ellipsis"
                  >{{ formModel[item.key] ||formModel[item.key]===0? formModel[item.key]:'--' }}</span>
              </el-tooltip>
          </el-form-item>
        </el-col>
      </el-row>
      <slot />
    </el-form>
</template>
<script>
import { Form, FormItem } from 'element-ui';
import UserSlot from './userSlot';
import ElementMap from './elementMap';
import FormSelect from './components/FormSelect.vue';
import FormRadio from './components/FormRadio.vue';
import FormCheckbox from './components/FormCheckbox.vue';
/* jsx-form 采用高阶组件、动态组件的特性，以element-ui Form为基础，
解决了多表单项时模板语法冗余的问题，专注于表单项业务的维护 */
export default {
  components: {
    ElForm: Form,
    ElFormItem: FormItem,
    FormSelect,
    FormRadio,
    FormCheckbox,
    UserSlot,
  },
  props: {
    /**
     * label: 表单项名称
     * key: 表单项model
     * type：标签类型 input/select/radio 等 elementMap维护映射关系
     * props: Object/Function 表单项属性：options等
     * on: 事件集合 click、change等
     *
     */
    formItems: {
      type: Array,
      required: true,
    },
    formModel: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      default: () => {},
    },
    span: {
      type: Number,
      default: 12,
    },
  },
  computed: {
    // 对formItems进行整合
    configItems() {
      return this.formItems.map(item => this.formatItem(item, this.formModel));
    },
  },
  methods: {
    // 整合表单项
    formatItem(sourceItem, form) {
      const item = { ...sourceItem };
      // 映射标签
      const type = item.type || 'input';
      const ele = ElementMap[type];
      item.tag = ele.tag;
      // 维护props
      const props = typeof item.props === 'function' ? item.props() : item.props;
      item.props = { ...ele.props, ...props };
      // 是否自定义渲染
      item._render = typeof item.render === 'function' ? item.render(form) : true;
      return item;
    },
  },
};
</script>
