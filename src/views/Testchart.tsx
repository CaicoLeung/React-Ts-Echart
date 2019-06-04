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
  private myChart: echarts.ECharts | null;
  private timer: number;
  constructor(props: any) {
    super(props);
    this.state = {
      height: '100%',
      width: '100%'
    };
    this.myChart = null;
  }

  public render() {
    return (
      <div id="echartRoot" style={echartRootStyle} />
    );
  }

  public componentDidMount() {
    const rootElement = document.getElementById('echartRoot') as HTMLDivElement;
    this.myChart = echarts.init(rootElement);
    this.myChart.showLoading();
    this.timer = window.setTimeout(() => {
      this.myChart!.setOption(this.props.option);
      this.myChart!.hideLoading();
      window.clearTimeout(this.timer);
    }, 3000);
  }
}