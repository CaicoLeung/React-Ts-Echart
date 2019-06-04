export const lineDB: echarts.EChartOption = {
  series: [
    {
      data: [
        [12, 5],
        [24, 20],
        [36, 36],
        [48, 10],
        [60, 10],
        [72, 20]
      ],
      smooth: true,
      type: 'line'
    }
  ],
  title: {
    text: '线形图'
  },
  toolbox: {
    feature: {
      dataView: {},
      restore: {},
      saveAsImage: {
        pixelRatio: 2
      }
    }
  },
  tooltip: {},
  xAxis: {},
  yAxis: {}
};

export const lineChartStyle: React.CSSProperties = {
  height: '400px',
  width: '600px'
};