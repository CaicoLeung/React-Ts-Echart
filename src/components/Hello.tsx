import * as React  from 'react';

interface IProps {
  name: string
}
interface IState {
  count: number
}

export default class Hello extends React.Component<IProps, IState> {
  public state = {
    count: 1
  };

  public render() {
    return (
      <div>
        <div>Hello {this.props.name}</div>
        <p>{this.props.children}</p>
      </div>
    );
  }
}