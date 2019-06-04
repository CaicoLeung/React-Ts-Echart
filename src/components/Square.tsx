import * as React from 'react';

interface IProps {
  value:  string
}
interface IState {
  data: string
}
export default class Square extends React.Component<IProps, IState> {
  public handlerClick = () => {
    alert('click');
  }

  public render() {
    return (
      <button className="square" onClick={this.handlerClick}>
        {this.props.value}
      </button>
    );
  }
}