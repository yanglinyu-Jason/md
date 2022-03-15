<template>
    <safety-table
        ref="table"
        :data="list"
        :className="[...className]"
        v-bind="$props"
        style="width:100%;"
        @select="select"
        @selection-change="selectionChange"
        @select-all="selectAll"
        @cell-mouse-enter="cellMouseEnter"
        @cell-mouse-leave="cellMouseLeave"
        @cell-click="cellClick"
        @row-click="rowClick"
        @row-contextmenu="rowContextmenu"
        @row-dblclick="rowDblclick"
        @header-click="headerClick"
        @header-contextmenu="headerContextmenu"
        @sort-change="sortChange"
        @filter-change="filterChange"
        @current-row-change="currentRowChange"
        @header-dragend="headerDragend"
        @expand-change="expandChange"
        @size-change="sizeChange"
        @current-page-change="currentPageChange"
        @prev-click="prevClick"
        @next-click="nextClick"
    >
        <slot name="table-column-header" />
        <el-table-column v-if="showSelection" type="selection" width="55" />
        <el-table-column
            v-if="showIndex && showPagination"
            type="index"
            :label="indexLabel"
            :width="indexWidth"
            align="center"
        >
            <template
                slot-scope="scope"
            >{{ ( $props.currentPage - 1 ) * $props.pageSize +scope.$index+1 }}</template>
        </el-table-column>
        <el-table-column
            v-else-if="showIndex"
            type="index"
            :label="indexLabel"
            :width="indexWidth"
        />
        <el-table-column
            v-for="(col, index) in columns"
            :key="index"
            :prop="col.prop"
            :label="col.label"
            :min-width="col.minWidth"
            :width="col.width"
            :sortable="col.sortable"
            :align="col.align || 'left'"
            :column-key="col.columnKey"
            :filters="col.filters"
            :filter-method="col.filterMethod"
            :filter-multiple="col.filterMultiple"
            :class-name="col.className"
            :show-overflow-tooltip="col.showTooltip || col.showTooltip===undefined"
            :render-header="col.renderHeader"
        >
            <!-- :class-name="col.filters ? 'sn-filter-col' : ''" -->
            <template slot-scope="scope">
                <user-slot
                    v-if="col.render"
                    :render="col.render"
                    :row="scope.row"
                    :index="scope.$index"
                    :column="col"
                />
                <slot
                    v-else-if="col.columnType==='slot'"
                    :name="col.prop"
                    :row="scope.row"
                    :index="scope.$index"
                />
                <span
                    v-else
                    :style="{'cursor': cursorKey.includes(col.prop) ? 'pointer': '', }"
                 >{{ scope.row[col.prop] ? scope.row[col.prop] : '-' }}</span>
            </template>
        </el-table-column>
    </safety-table>
</template>
<script>
import { TableColumn, Pagination } from 'element-ui';
import Table from '../Table';
import userSlot from './userSlot';

export default {
  components: {
    'safety-table': Table,
    'el-table-column': TableColumn,
    'user-slot': userSlot,
  },
  props: {
    ...Table.props, // 继承safety-table的props
    ...Pagination.props, // 继承el-pagination的props
    className: {
      type: Array,
      default() {
        return ['small'];
      },
    },
    showPagination: {
      type: Boolean,
      default() {
        return true;
      },
    },
    showSelection: {
      type: Boolean,
      default: false,
    },
    layout: {
      type: String,
      default() {
        return 'prev, pager, next, jumper, ->, total';
      },
    },
    dataText: {
      type: String,
      default: '暂无数据',
    },
    columns: {
      type: Array,
      default: () => [],
    },
    list: {
      type: Array,
      default: () => [],
    },
    showIndex: {
      type: Boolean,
      default: false,
    },
    indexLabel: {
      type: String,
      default: '序号',
    },
    indexMethod: {
      type: Function,
    },
    indexWidth: {
      type: String,
      default: '60',
    },
    cursorKey: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggleRowSelection(row, selected) {
      if (selected) {
        this.$refs.table.toggleRowSelection(row, true);
      } else {
        this.$refs.table.toggleRowSelection(row);
      }
    },
    clearSelection(row) {
      this.$refs.table.clearSelection(row);
    },
    toggleAllSelection() {
      this.$refs.table.toggleAllSelection();
    },
    toggleRowExpansion(row, expanded) {
      if (expanded) {
        this.$refs.table.toggleRowExpansion(row, true);
      } else {
        this.$refs.table.toggleRowExpansion(row);
      }
    },
    setCurrentRow(row) {
      this.$refs.table.setCurrentRow(row);
    },
    clearSort() {
      this.$refs.table.clearSort();
    },
    clearFilter(columnKey) {
      this.$refs.table.clearFilter(columnKey);
    },
    doLayout() {
      this.$refs.table.doLayout();
    },
    sort(prop, order) {
      this.$refs.table.sort(prop, order);
    },
    select(selection, row) {
      this.$emit('select', selection, row);
    },
    selectAll(selection) {
      this.$emit('selection-all', selection);
    },
    selectionChange(selection) {
      this.$emit('selection-change', selection);
    },
    cellMouseEnter(row, column, cell, event) {
      this.$emit('cell-mouse-enter', row, column, cell, event);
    },
    cellMouseLeave(row, column, cell, event) {
      this.$emit('cell-mouse-leave', row, column, cell, event);
    },
    cellClick(row, column, cell, event) {
      this.$emit('cell-click', row, column, cell, event);
    },
    rowClick(row, column, event) {
      this.$emit('row-click', row, column, event);
    },
    rowContextmenu(row, column, event) {
      this.$emit('row-contextmenu', row, column, event);
    },
    rowDblclick(row, column, event) {
      this.$emit('row-dblclick', row, column, event);
    },
    headerClick(column, event) {
      this.$emit('header-click', column, event);
    },
    headerContextmenu(column, event) {
      this.$emit('header-contextmenu', column, event);
    },
    sortChange({ column, prop, order }) {
      this.$emit('sort-change', { column, prop, order });
    },
    filterChange(filters) {
      this.$emit('filter-change', filters);
    },
    currentRowChange(currentRow, oldCurrentRow) {
      this.$emit('current-row-change', currentRow, oldCurrentRow);
    },
    headerDragend(newWidth, oldWidth, column, event) {
      this.$emit('header-dragend', newWidth, oldWidth, column, event);
    },
    expandChange(row, expanded) {
      this.$emit('expand-change', row, expanded);
    },
    sizeChange(pages) {
      this.$emit('size-change', pages);
    },
    currentPageChange(page) {
      this.$emit('current-page-change', page);
    },
    prevClick(page) {
      this.$emit('prev-click', page);
    },
    nextClick(page) {
      this.$emit('next-click', page);
    },
  },
};
</script>
