<template>
    <div class="basic-info">
        <el-col :span="item.span || span" v-for="(item, index) in columns" :key="index">
            <div class="cell" v-if="item.render">
                <span
                    v-if="item.title"
                    class="basic-info-title"
                    :title="data[item.prop]"
                >{{ item.title }}：</span>
                <user-slot
                    v-if="item.render"
                    :render="item.render"
                    :data="data"
                />
            </div>
            <div class="cell" v-else :title="data[item.prop]">
                <span v-if="item.title" class="basic-info-title">{{ item.title }}：</span>
                <el-tooltip
                    :disabled="!data[item.prop] || String(data[item.prop]).length < 30"
                    placement="top"
                    :content="String(data[item.prop])"
                >
                    <span
                        class="basic-info-content ellipsis"
                    >{{ data[item.prop] ||data[item.prop]===0? data[item.prop]:'--' }}</span>
                </el-tooltip>
            </div>
        </el-col>
    </div>
</template>
<script>
import userSlot from './userSlot';

export default {
  components: {
    userSlot,
  },
  props: {
    span: {
      type: Number,
      default: 12,
    },
    data: {
      type: Object,
      default: () => {},
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.basic-info {
  font-size: cw(14);
  color: #FFF;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
  &-title {
    white-space: nowrap;
    color: #AADDFF;
  }
  &-content {
    padding-right: cw(10);
    outline: none;
  }
  & > .el-col {
    line-height: ch(36);
  }
  .cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
