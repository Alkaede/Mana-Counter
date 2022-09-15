import * as React from 'react';
import '../css/App.css';
import { ManaCounter } from './ManaCounter';
import { ManaColor, ManaInfo } from './Models/Mana';

interface IState {
  manasInfo: ManaInfo[];
}

export class App extends React.PureComponent {

  //pass in app manainfo object to manacounter props
  // state fuckin done already up top smile:) in screenshots 
  // component did mount with json data pars -> make an array of mana info -> populate to istate array in this line 
  // for each manacounter -> stuff to find 
  // getmanainfo returns manainfo object


  public render() {
    return (
      <>
        {/* make new compenent to house these */}
        <ManaCounter manaColor={ManaColor.WHITE} manaInfo={this.getManaInfo(ManaColor.WHITE)} />
        <ManaCounter manaColor={ManaColor.BLUE} />
        <ManaCounter manaColor={ManaColor.BLACK} />
        <ManaCounter manaColor={ManaColor.RED} />
        <ManaCounter manaColor={ManaColor.GREEN} />
      </>
    );
  }
}
