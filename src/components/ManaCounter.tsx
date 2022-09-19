import * as React from 'react';
import '../css/main.min.css';
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
      <div className="counter">
        <h1 className="counter_number">{this.state.manaCount}</h1>
        <img src={this.props.manaInfo.image} alt="" onClick={() => this.increment(1)} className="counter_image" />
        <button onClick={() => this.decrement(1)} className="counter_button">Remove</button>
      </div>
    )
  }

  private increment = (amount: number) => {
    this.setState(state => ({
      manaCount: state.manaCount + amount,
    }));
  }

  private decrement = (amount: number) => {
    if (this.state.manaCount === 0)
      return;

    this.setState(state => ({
      manaCount: state.manaCount - amount,
    }));
  }
}
