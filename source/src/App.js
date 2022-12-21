import "./css.css";
import GameBoard from "./components/game/GameBoard";
import React, { Component } from 'react'
import { GetLocalStorage, gameSave } from "./modules/gamelogic/SaveGame";
import WinScreen from "./components/frame/WinScreen";
import GameOverScreen from "./components/frame/GameOverScreen";

export default class App extends Component {
  constructor(){
    super();
    GetLocalStorage();
    this.todayWin = gameSave.todayWin;
    this.todayLose = gameSave.todayLose;
    console.log(`win:${this.todayWin} lose: ${this.todayLose}`);
  }

  
   render() {
    let render = <></>;
    
    if(this.todayLose) {
      render = <GameOverScreen />;

    } else if(this.todayWin){
      render = <WinScreen />

    } else if(!this.todayLose && !this.todayWin)
    {
      render = <GameBoard />
    }

    
    return (
      <>
      {render}
      </>
    )
  }
}