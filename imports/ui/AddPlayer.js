import React from 'react';
import {Players} from './../api/players';


export default class AddPlayer extends React.Component{
  handleSubmit(e){
    let playerName = e.target.playerName.value;

    e.preventDefault();//Add Player butonuna bastığımızda yenileme yapmamasına yarıyor.

    if(playerName){
    e.target.playerName.value = '';
    //Players insert
    Players.insert({
      name: playerName,
      score: 0
    });
  }
  }
  render() {

    return(
        <div className="item">
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <input className="form__input" type="text" name="playerName" placeholder="Player Name"/>
            <button className="button">Add Player</button>
          </form>
        </div>

    );
  }
}
