import 'echarts/lib/chart/pie';
import 'echarts/lib/component/visualMap';
import * as echarts from 'echarts/lib/echarts';
import * as React from 'react';
import { NightingaleDB, NightingaleStyle } from './NightingaleDB';

interface IState {
  pieOptions: echarts.EChartOption
}

export default class NightingaleChart extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pieOptions: NightingaleDB
    }
  }

  public render() {
    return (
      <div id="nightingaleBoot" style={ NightingaleStyle } />
    );
  }

  public componentDidMount() {
    const nightingaleBoot = document.querySelector('#nightingaleBoot') as HTMLDivElement;
    echarts.init(nightingaleBoot).setOption(this.state.pieOptions);
  }
}