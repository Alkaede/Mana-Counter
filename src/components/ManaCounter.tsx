import * as React from 'react';
import '../css/App.css';
import { ManaInfo } from './Models/Mana';

interface IState {
  manaCount: number;
}

interface IProp {
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
        <h1>{this.props.manaInfo.mana}</h1>
        <h1>{this.state.manaCount}</h1>
        <img src={this.props.manaInfo.image} alt="" onClick={() => this.increment(1)} />
        {/* <button >++</button> */}
        <button onClick={() => this.decrement(1)}>--</button>
      </div>
    )
  }

  private increment = (amount: number) => {
    this.setState(state => ({
      manaCount: state.manaCount + amount,
    }));
  }

  private decrement = (amount: number) => {
    this.setState(state => ({
      manaCount: state.manaCount - amount,
    }));
  }
}
