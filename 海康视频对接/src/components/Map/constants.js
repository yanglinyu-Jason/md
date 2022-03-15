export const MARKER_TYPES = { // 地图打点类型
  ZHONGDAWEIXIANYUAN: 'zhongdaweixianyuan', // 重大危险源
  FENGXIANSISE: 'fengxiansise', // 风险四色图
  BENGFANG: 'bengfang', // 泵房
  SHUICHI: 'shuichi', // 水池
  SHUICHE: 'shuiche', // 水车
  XIAOFANGSHUAN: 'xiaofangshuan', // 消防栓
  ZHUJI: 'zhuji', // 主机
  MEIQI: 'meiqi', // 煤气监测
  SHEXIANGTOU: 'shexiangtou', // 摄像头
};

export const PRODUCTION_MAP_TOOLS = []; // 生产页面-地图工具
export const SAFETY_MAP_TOOLS = [ // 安全页面-地图工具
  {
    name: '安全图层',
    children: [
      { name: '重大危险源', type: MARKER_TYPES.ZHONGDAWEIXIANYUAN },
      { name: '风险四色图', type: MARKER_TYPES.FENGXIANSISE },
    ],
  },
  {
    name: '消防图层',
    children: [
      { name: '消防监测主机', type: MARKER_TYPES.ZHUJI },
      { name: '消防泵房', type: MARKER_TYPES.BENGFANG },
      { name: '消防水池', type: MARKER_TYPES.SHUICHI },
      { name: '消防应急救援水车', type: MARKER_TYPES.SHUICHE },
      { name: '室外消火栓', type: MARKER_TYPES.XIAOFANGSHUAN },
    ],
  },
  {
    name: '煤气图层',
    children: [
      { name: '煤气监测点位', type: MARKER_TYPES.MEIQI },
    ],
  },
  {
    name: '视频监控图层',
    children: [
      { name: '摄像头', type: MARKER_TYPES.SHEXIANGTOU },
    ],
  },
];

// 点位面板-主机列
export const ZHUJI_COLUMNS = [
  { title: '监测设备', prop: 'jianceshebei' },
  { title: '烟感', prop: 'yangan', span: 8 },
  { title: '手报', prop: 'shoubao', span: 8 },
  { title: '声光', prop: 'shengguang', span: 8 },
  {
    title: '报警',
    prop: 'baojing',
    render(h, params) {
      const { data } = params;
      if (data.baojing) {
        return <span>{ data.baojing || '--' } </span>;
      }
      return <span>{ data.baojing || '--' }</span>;
    },
  },
];
// 点位面板-主机列
export const BENGFANG_COLUMNS = [
  { title: '', prop: 'mingcheng' },
  { title: '车间', prop: 'chejian' },
  { title: '位置', prop: 'weizhi' },
  { title: '消防水池', prop: 'xiaofangshuichi' },
];
// 点位面板-水池列
export const SHUICHI_COLUMNS = [
  { title: '', prop: 'mingcheng' },
  { title: '车间', prop: 'chejian' },
  { title: '位置', prop: 'weizhi' },
];
// 点位面板-消防水车列
export const SHUICHE_COLUMNS = [
  { title: '', prop: 'mingcheng' },
  { title: '位置', prop: 'weizhi' },
  { title: '水箱容量', prop: 'shuixiangrongliang' },
  { title: '品牌', prop: 'pinpai' },
  { title: '型号', prop: 'xinghao' },
];
// 点位面板-消防栓列
export const XIAOFANGSHUAN_COLUMNS = [
  { title: '', prop: 'mingcheng' },
  { title: '车间', prop: 'chejian' },
  { title: '型号', prop: 'xinghao' },
  { title: '配置部位', prop: 'peizhibuwei' },
];
// 点位面板-重大危险源列
export const ZHONGDAWEIXIANYUAN_COLUMNS = [
  { title: '', prop: 'mingcheng' },
  { title: '重大危险源等级', prop: 'dengji' },
  { title: '位置', prop: 'weizhi' },
];
// 点位面板-煤气点位列
export const MEIQI_COLUMNS = [
  { title: '设备名称', prop: 'mingcheng' },
  { title: '煤气点位', prop: 'dianwei' },
];
// 点位面板-煤气点位报警列
export const MEIQIBAOJING_COLUMNS = [
  { title: '报警点位', prop: 'dianwei' },
  { title: '报警时间', prop: 'shijian' },
  { title: '处理状态', prop: 'zhuangtai' },
];

export const MARKERS = [ // 消防打点数据
  {
    id: 1,
    type: 'zhuji',
    position: [120.7688, 33.2067],
    data: {
      title: '消防主机 动力厂-炼铁站-TX3000',
      jianceshebei: 12,
      yangan: 2,
      shoubao: 2,
      shengguang: 2,
      baojing: 0,
    },
  },
  {
    id: 2,
    type: 'zhuji',
    position: [120.7724, 33.2077],
    data: {
      title: '消防主机 动力厂-炼铁站-TX3000',
      jianceshebei: 12,
      yangan: 2,
      shoubao: 2,
      shengguang: 2,
      baojing: 0,
    },
  },
  {
    id: 3,
    type: 'bengfang',
    position: [120.7774, 33.2087],
    data: {
      title: '消防泵房',
      mingcheng: '厂部-烧结厂',
      chejian: '二三期车间',
      weizhi: '二三期水泵房东侧',
      xiaofangshuichi: 1,
    },
  },
  {
    id: 5,
    type: 'shuichi',
    position: [120.7737, 33.2144],
    data: {
      title: '消防水池',
      mingcheng: '厂部-烧结厂',
      chejian: '二三期车间',
      weizhi: '二三期水泵房东侧',
    },
  },
  {
    id: 6,
    type: 'xiaofangshuan',
    position: [120.7725, 33.2112],
    data: {
      title: '室外消防栓',
      mingcheng: '厂部—物流部',
      chejian: '一扎',
      xinghao: 'DN65',
      peizhibuwei: '一扎整流变室外',
    },
  },
  {
    id: 7,
    type: 'shuiche',
    position: [120.7781, 33.2121],
    data: {
      title: '消防应急救援水车',
      mingcheng: '厂部—物流部',
      weizhi: '车队大院内',
      shuixiangrongliang: '15吨',
      pinpai: '东风牌',
      xinghao: 'EQ1141',
    },
  },
  {
    id: 8,
    type: 'zhongdaweixianyuan',
    position: [120.7685, 33.2085],
    data: {
      title: '重大危险源',
      mingcheng: '8万煤气柜',
      dengji: '四级',
      weizhi: '动力厂',
    },
  },
  {
    id: 9,
    type: 'zhongdaweixianyuan',
    position: [120.76954107, 33.2084594],
    // position: [120.77492331, 33.20953202],
    data: {
      title: '重大危险源',
      mingcheng: '15万煤气柜',
      dengji: '三级',
      weizhi: '动力厂',
    },
  },
  {
    id: 12,
    type: 'meiqi',
    position: [120.7685, 33.2085],
    data: {
      title: '煤气点位',
      mingcheng: '煤气点',
      dianwei: '煤气点位1',
    },
  },
  {
    id: 13,
    type: 'meiqi',
    position: [120.7724, 33.2077],
    data: {
      /* title: '煤气点位报警',
      dianwei: '煤气报警点位1',
      shijian: '2022-01-22 12:00:23',
      zhuangtai: '未处理',
      baojing: 1, */
      title: '煤气点位',
      mingcheng: '煤气点',
      dianwei: '煤气点位1',
    },
  },
  {
    id: 100,
    type: 'shexiangtou',
    position: [120.7757, 33.2119],
  },
  {
    id: 101,
    type: 'shexiangtou',
    position: [120.7773, 33.2102],
  },
  {
    id: 102,
    type: 'shexiangtou',
    position: [120.7684, 33.2137],
  },
  {
    id: 103,
    type: 'shexiangtou',
    position: [120.7788, 33.2090],
  },
  {
    id: 104,
    type: 'shexiangtou',
    position: [120.7730, 33.2055],
  },
  {
    id: 105,
    type: 'shexiangtou',
    position: [120.7703, 33.2149],
  },
  {
    id: 106,
    type: 'shexiangtou',
    position: [120.7699, 33.2132],
  },
  {
    id: 107,
    type: 'shexiangtou',
    position: [120.7760, 33.2068],
  },
  {
    id: 108,
    type: 'shexiangtou',
    position: [120.7764, 33.2115],
  },
  {
    id: 110,
    type: 'shexiangtou',
    position: [120.7779, 33.2090],
  },
  {
    id: 111,
    type: 'shexiangtou',
    position: [120.7728, 33.2113],
  },
  {
    id: 112,
    type: 'shexiangtou',
    position: [120.7722, 33.2070],
  },
  {
    id: 113,
    type: 'shexiangtou',
    position: [120.7696, 33.2102],
  },
  {
    id: 114,
    type: 'shexiangtou',
    position: [120.7701, 33.2065],
  },
  {
    id: 115,
    type: 'shexiangtou',
    position: [120.7673, 33.2112],
  },
  {
    id: 116,
    type: 'shexiangtou',
    position: [120.7745, 33.2130],
  },
  {
    id: 117,
    type: 'shexiangtou',
    position: [120.7741, 33.2149],
  },
  {
    id: 118,
    type: 'shexiangtou',
    position: [120.7686, 33.2103],
  },
  {
    id: 119,
    type: 'shexiangtou',
    position: [120.7721, 33.2108],
  },
  {
    id: 120,
    type: 'shexiangtou',
    position: [120.7787, 33.2146],
  },
  {
    id: 121,
    type: 'shexiangtou',
    position: [120.7741, 33.2114],
  },
  {
    id: 122,
    type: 'shexiangtou',
    position: [120.7706, 33.2061],
  },
  {
    id: 123,
    type: 'shexiangtou',
    position: [120.7739, 33.2064],
  },
  {
    id: 124,
    type: 'shexiangtou',
    position: [120.7734, 33.2109],
  },
  {
    id: 125,
    type: 'shexiangtou',
    position: [120.7787, 33.2092],
  },
  {
    id: 126,
    type: 'shexiangtou',
    position: [120.7788, 33.2092],
  },
  {
    id: 127,
    type: 'shexiangtou',
    position: [120.7673, 33.2128],
  },
  {
    id: 129,
    type: 'shexiangtou',
    position: [120.7672, 33.2104],
  },
];
