import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import * as echarts from 'echarts/lib/echarts';
import * as React from 'react';

const pieOptions: echarts.EChartOption<echarts.EChartOption.SeriesPie> = {
  series: [
    {
      data: [
        {name: 'A', value: 1212},
        {name: 'B', value: 2323},
        {name: 'C', value: 1919}
      ],
      type: 'pie'
    }
  ],
  title: {
    text: '饼状图'
  }
};
const pieBootStyle: React.CSSProperties = {
  height: '400px',
  width: '600px'
}

export default class PieChart extends React.Component {
  public render() {
    return (
      <div id="pieBoot" style={pieBootStyle} />
    );
  }
  public componentDidMount() {
    const el: HTMLDivElement = document.querySelector('#pieBoot') as HTMLDivElement;
    echarts.init(el).setOption(pieOptions);
  }
}