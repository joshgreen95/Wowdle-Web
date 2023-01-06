//Core
import "./css.css";
import React, { Component } from 'react';
//Components
import Border from "./components/frame/Border";
import BottomBorder from "./components/frame/BottomBorder";
import WinScreen from "./components/frame/WinScreen";
import GameOverScreen from "./components/frame/GameOverScreen";
import GameBoard from "./components/game/GameBoard";
import StatsScreen from "./components/frame/StatsScreen";
import HelpScreen from "./components/frame/HelpScreen";
//Functions
import { GetLocalStorage, gameSave, UpdateLifePoints, LoadHints } from "./modules/gamelogic/SaveGame";
import { ConstructWowHeadURL, dailyRandomNPC, FormatNPCList, GetDailyRandNPC } from "./modules/fblogic/HandleNPC";
import { setHADailyNPC } from "./modules/gamelogic/HandleAnswer";
import { GetImg } from "./modules/fblogic/GetIMG";
import { GetStats } from "./modules/gamelogic/Stats";

export default class App extends Component {
  constructor(){
    super();
    GetLocalStorage();
    this.stats = GetStats();
    this.state = {
      todayWin: gameSave.todayWin,
      todayLose: gameSave.todayLose,
      controlsDisabled: (gameSave.todayWin || gameSave.todayLose),
      statsShown: false,
      helpShown: false,
      npcLoaded: false,
      
    };
    this.npcName = null;
    this.npcURL = null;
    this.npcWowHeadURL = null;
  }

  componentDidMount(){
    //Call setup of Game
    FormatNPCList().then((npcArr) => {  
      GetDailyRandNPC(npcArr).then((npc) => {
        //Feeds Daily NPC to HandleAnswer
        setHADailyNPC(npc);
        GetImg(npc).then((randNPCImageURL) => {
          this.npcURL = randNPCImageURL;
          this.npcName = dailyRandomNPC.name;
          this.npcWowHeadURL = ConstructWowHeadURL();
          this.setState({npcLoaded: true});
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

  CloseOverlay(){
    this.setState({ helpShown: false, statsShown: false });
  }

   render() {
    return (
          <>
          <div id='overlaycontainer'>
            {this.state.npcLoaded && this.state.todayWin && (<WinScreen wowHeadURL={this.npcWowHeadURL} npcName={this.npcName}/>) }
            {this.state.npcLoaded && this.state.todayLose && (<GameOverScreen wowHeadURL={this.npcWowHeadURL} npcName={this.npcName} />)}
            {this.state.npcLoaded && this.state.statsShown && (<StatsScreen CloseOverlay={this.CloseOverlay.bind(this)}/>)}
            {this.state.npcLoaded && this.state.helpShown && (<HelpScreen CloseOverlay={this.CloseOverlay.bind(this)} />)}
          </div>
          <div className="playfield">
            <div id="playwindow">
              <Border className='Border' ShowStatScreen={this.ShowStatScreen.bind(this)} />
              {this.state.npcLoaded && (<GameBoard UpdateWinLoss={this.UpdateWinLoss.bind(this)} controlsDisabled={this.state.controlsDisabled}  npcURL={this.npcURL}/>)}
              <BottomBorder ShowHelpScreen={this.ShowHelpScreen.bind(this)} />
          </div>
        </div>
        </>
    )
  }
}