import * as React from 'react';
import mana from './mana.json';
import '../css/main.min.css';
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

    await this.setState({
      manaInfos,
      loading: false,
    });
  };


  render() {
    if (this.state.loading) {
      return (
        <h1>loading..</h1>
      )
    };

    return (
      <>
        <div className='component_container'>
          <ManaCounter manaInfo={this.getManaInfo(ManaColor.WHITE)!} />
          <ManaCounter manaInfo={this.getManaInfo(ManaColor.BLUE)!} />
          <ManaCounter manaInfo={this.getManaInfo(ManaColor.BLACK)!} />
          <ManaCounter manaInfo={this.getManaInfo(ManaColor.RED)!} />
          <ManaCounter manaInfo={this.getManaInfo(ManaColor.GREEN)!} />
        </div>
        <div>
          <img src='https://64.media.tumblr.com/0970ff722f5aa2e4150a01e7824f5c8e/tumblr_pi4ahrZcmo1sazby5o7_r1_1280.png' alt='mtg official art' className='mtg_art' />
        </div>
      </>
    );
  }


  private getManaInfo = (color: ManaColor) => {
    return this.state.manaInfos.find(item => item.mana === color);
  };

}