export const NightingaleDB: echarts.EChartOption = {
  backgroundColor: '#2c343c',
  series: [
    {
      data: [
        { name: '视频广告', value: 235 },
        { name: '联盟广告', value: 274 },
        { name: '邮件营销', value: 310 },
        { name: '直接访问', value: 335 },
        { name: '搜索引擎', value: 400 }
      ],
      label: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      itemStyle: {
        color: '#c23531',
        emphasis: {
          shadowBlur: 100,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowOffsetX: 5,
          shadowOffsetY: 3
        }
      },
      name: '访问来源',
      radius: '55%',
      roseType: true,
      type: 'pie'
    }
  ],
  visualMap: [
    {
      show: false,
      max: 600,
      min: 80,
      inRange: {
        colorLightness: [0, 1]
      }
    }
  ]
};

export const NightingaleStyle: React.CSSProperties = {
  height: '400px',
  width: '600px'
}