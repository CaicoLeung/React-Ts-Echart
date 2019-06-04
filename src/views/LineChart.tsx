import 'echarts/lib/chart/line'
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/tooltip';
import * as echarts from 'echarts/lib/echarts';
import * as React from 'react';
import { lineChartStyle, lineDB } from './lineDB';

interface IState {
  lineOptions: echarts.EChartOption
}

export default class LineChart extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      lineOptions: lineDB
    }
  }

  public render() {
    return (
      <div id="lineBoot" style={ lineChartStyle } />
    );
  }
  
  public componentDidMount() {
    const lineBoot: HTMLDivElement = document.querySelector('#lineBoot') as HTMLDivElement;
    echarts.init(lineBoot, 'dark').setOption(this.state.lineOptions);
  }
}