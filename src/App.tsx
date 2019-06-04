import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import Square from './components/Square';
import Echart from './views/echart';

import logo from './logo.svg';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello name="Caico">I Love U</Hello>
        <Square value="点击我" />
        <Echart option={this.state.option} renderer="canvas" />
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
          text: 'ECharts 入门示例'
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
