import { fitChartSize } from '../../utils/util';
// 公共的样式
export const basicOption = {
  tooltip: {
    trigger: 'item',
  },
  title: [
    {
      padding: 5, // 标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
      itemGap: 10,
      textStyle: {
        fontFamily: 'Microsoft YaHei',
        fontSize: fitChartSize(18),
        fontWeight: '400',
        color: '#FFFFFF',
      },
      subtextStyle: {
        // 副标题文本样式{"color": "#aaa"}
        fontSize: fitChartSize(30),
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#28FFF2',
      },
      left: '48%',
      top: '28%',
      textAlign: 'center',
    },
  ],
  legend: {
  },
  series: [

  ],
};
