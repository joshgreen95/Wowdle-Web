//Core
import "./css.css";
import React, { Component } from 'react';
//Components
import Border from "./components/frame/Border";
import WinScreen from "./components/frame/WinScreen";
import GameOverScreen from "./components/frame/GameOverScreen";
import GameBoard from "./components/game/GameBoard";
import NPCImage from "./components/game/NPCImage";
import StatsScreen from "./components/frame/StatsScreen";
import HelpScreen from "./components/frame/HelpScreen";
//Functions
import { GetLocalStorage, gameSave, UpdateLifePoints, LoadHints } from "./modules/gamelogic/SaveGame";
import { FormatNPCList, GetDailyRandNPC } from "./modules/fblogic/HandleNPC";
import { setHADailyNPC } from "./modules/gamelogic/HandleAnswer";
import { GetImg } from "./modules/fblogic/GetIMG";
import { createRoot } from "react-dom/client";
import { GetStats } from "./modules/gamelogic/Stats";

export default class App extends Component {
  constructor(){
    super();
    GetLocalStorage();
    this.stats = GetStats();
    console.table(gameSave);

    this.state = {
      todayWin: gameSave.todayWin,
      todayLose: gameSave.todayLose,
      controlsDisabled: (gameSave.todayWin || gameSave.todayLose),
      statsShown: false,
      helpShown: false
    };

    console.table(this.state);
  }

  componentDidMount(){
    //Call setup of Game
    FormatNPCList().then((npcArr) => {  
      GetDailyRandNPC(npcArr).then((npc) => {
        //Feeds Daily NPC to HandleAnswer
        setHADailyNPC(npc);
        //Loads lifepoints from earlier session
        UpdateLifePoints();
        //Load hints from earlier session if exist
        LoadHints();
        GetImg(npc).then((randNPCImageUrl) => {
          //Find NPC Image Container 
          let imageContainer = document.getElementById('imagecontainer');
          // Use React to create a root reference
          const root = createRoot(imageContainer);
          //Render Image
          root.render(<NPCImage id='npcimage' src={randNPCImageUrl} />);
        });
      });
    });
  }
  
  UpdateWinLoss(){
    const controls = (gameSave.todayWin || gameSave.todayLose);
    this.setState({todayWin: gameSave.todayWin, todayLose: gameSave.todayLose, controlsDisabled: controls});
  }

  ShowStatScreen(){
    const inverseStatsShown = !this.state.statsShown;
    this.setState({ statsShown: inverseStatsShown, helpShown: false });
  }

  ShowHelpScreen() {
    const inverseHelpShown = !this.state.helpShown;
    this.setState({ helpShown: inverseHelpShown, statsShown: false });
  }

   render() {
    return (
      <>
      <>
      <Border className='Border' showStatScreen={this.ShowStatScreen.bind(this)} showHelpScreen={this.ShowHelpScreen.bind(this)}/>
      {/* This Renders Stats screen if this.state.statsshown === true */}     
      {this.state.statsShown && (<StatsScreen />)}
      {this.state.helpShown && (<HelpScreen />)}


      </>
      <>
      <GameBoard updateWinLoss={this.UpdateWinLoss.bind(this)} controlsDisabled={this.state.controlsDisabled}/>
      {this.state.todayWin && (<WinScreen />)}
      {this.state.todayLose && (<GameOverScreen />)}
      
      </>
      </>
    )
  }
}