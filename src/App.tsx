import * as React from 'react';
import './App.css';
import LineChart from './views/LineChart';
import NightingaleChart from './views/NightingaleChart';
import PieChart from './views/PieChart'; 
import Testchart from './views/Testchart';

interface IState {
  option: any
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      option: {} as echarts.EChartOption
    }
  }

  public render() {
    return (
      <div className="App">
        <Testchart option={this.state.option} renderer="canvas" />
        <PieChart />
        <LineChart />
        <NightingaleChart />
      </div>
    );
  }

  public componentWillMount() {
    this.setState({
      option: {
        legend: {
          data: '销量'
        },
        series: [{
          data: [5, 20, 36, 10, 10, 20],
          name: '销量',
          type: 'bar'
        }],
        title: {
          text: '柱形图'
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {}
      }
    })
  }
}

export default App;
