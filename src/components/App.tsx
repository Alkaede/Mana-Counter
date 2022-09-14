import * as React from 'react';
import manaJSON from './mana.json';
import '../css/App.css';
import { ManaObject, ManaColor } from './Models/Mana';

interface IState {
  manaArray: ManaObject[];
}
// let greenMana = manaArray.find(item => item.type == ManaColor.GREEN);

class App extends React.PureComponent {

  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    )
  }
}

export default App;