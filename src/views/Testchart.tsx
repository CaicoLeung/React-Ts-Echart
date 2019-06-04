import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import * as echarts from 'echarts/lib/echarts';
import * as React from 'react';

interface IState {
  width: string,
  height: string
}

interface IProps {
  renderer: string,
  option: echarts.EChartOption
}

const echartRootStyle = {
  height: '400px',
  width: '600px'
}

export default class Test extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      height: '100%',
      width: '100%'
    };
  }

  public render() {
    return (
      <div id="echartRoot" style={echartRootStyle} />
    );
  }

  public componentDidMount() {
    const rootElement: HTMLDivElement | HTMLCanvasElement = document.getElementById('echartRoot') as HTMLDivElement;
    const myChart = echarts.init(rootElement);
    myChart.setOption(this.props.option);
  }
}