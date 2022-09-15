import * as React from 'react';
import manaJSON from './mana.json';
import '../css/App.css';
import { ManaObj, ManaColor } from './Models/ManaObject';

// interface IState {
//   manaArray: ManaObj[];
// }

// const manaAtt = (manas: IState[]) => {
//   for (let mana of manas) {
//     if (mana.hasOwnProperty('color')) {
//       let greenMana = mana.manaArray.find(item => item.type === ManaColor.GREEN);
//       console.log(greenMana);
//     }
//   }
// }

type MyState = {
  count: number,
}

// console.log(ManaColor);
// console.log(ManaObj.color)


class App extends React.PureComponent {

  state: MyState = {
    count: 0,
  }


  increment = (amt: number) => {
    this.setState(() => ({
      count: this.state.count + amt,
    }))
  }

  decrement = (amt: number) => {
    this.setState(() => ({
      count: this.state.count - amt,
    }))
  }


  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <button onClick={() => this.increment(1)}>--</button>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.decrement(1)}>--</button>
      </div>
    )
  }

}

export default App;