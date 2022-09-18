import * as React from 'react';
import '../css/App.css';
import mana from './mana.json';
import { ManaCounter } from './ManaCounter';
import { ManaInfo, ManaColor } from './Models/Mana';

interface IState {
  manaInfos: ManaInfo[];
  loading: boolean;
};


export class App extends React.PureComponent<{}, IState>{

  public state: Readonly<IState> = {
    manaInfos: [],
    loading: true,
  };

  public async componentDidMount() {
    let manaInfos: ManaInfo[] = [];

    mana.forEach(ele => {
      let newObj = {
        mana: ele.mana,
        image: ele.image,
        color: ele.color
      };

      manaInfos.push(newObj);
    });
    console.log(manaInfos, 'after pushing manainfos');

    await this.setState({
      manaInfos,
      loading: false,
    });
    console.log(this.state.manaInfos, 'after set state')
  };


  render() {
    if (this.state.loading) {
      return (
        <h1>loading..</h1>
      )
    };

    return (
      <>
        <ManaCounter manaInfo={this.getManaInfo(ManaColor.WHITE)!} />
        <ManaCounter manaInfo={this.getManaInfo(ManaColor.BLUE)!} />
        <ManaCounter manaInfo={this.getManaInfo(ManaColor.BLACK)!} />
        <ManaCounter manaInfo={this.getManaInfo(ManaColor.RED)!} />
        <ManaCounter manaInfo={this.getManaInfo(ManaColor.GREEN)!} />
      </>
    );
  }


  private getManaInfo = (color: ManaColor) => {
    return this.state.manaInfos.find(item => item.mana === color);
  };

}