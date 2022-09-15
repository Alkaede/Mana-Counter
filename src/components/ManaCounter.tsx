import * as React from 'react';
import '../css/App.css';
import { ManaColor, ManaInfo } from './Models/Mana';

interface IState {
  manaCount: number;
}

interface IProp {
  manaColor: ManaColor;
  manaInfo: ManaInfo;
}

export class ManaCounter extends React.PureComponent<IProp, IState> {

  public constructor(props: IProp) {
    super(props);

    this.state = {
      manaCount: 0,
    };
  }

  public render() {
    return (
      <div>
        {/* <h1>{this.props.manaInfo.color}</h1> */}
        <h1>{this.props.manaColor}</h1>
        <button onClick={() => this.increment(1)}>--</button>
        <h1>{this.state.manaCount}</h1>
        <button onClick={() => this.decrement(1)}>--</button>
      </div>
    )
  }

  private increment = (amount: number) => {
    let manaCount = this.state.manaCount + amount;

    this.setState({
      manaCount,
    });
  }

  private decrement = (amount: number) => {
    let manaCount = this.state.manaCount - amount;

    this.setState({
      manaCount,
    });
  }
}
