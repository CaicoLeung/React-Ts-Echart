import 'echarts/lib/chart/bar';
import 'echarts/lib/component/dataset';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/tooltip';
import * as echarts from 'echarts/lib/echarts';
import * as React from 'react';
import { BarDatasetDB, BarDatasetStyle } from './BarDatasetDB'

export default class BarDatasetChart extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div id="barDatasetBoot" style={ BarDatasetStyle } />
    )
  }

  public componentDidMount() {
    const barDatesetBoot = document.getElementById('barDatasetBoot') as HTMLDivElement;
    echarts.init(barDatesetBoot).setOption(BarDatasetDB);
  }
}