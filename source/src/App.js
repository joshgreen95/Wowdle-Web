//Core
import "./css.css";
import React, { Component } from 'react';
//Components
import Border from "./components/frame/Border";
import WinScreen from "./components/frame/WinScreen";
import GameOverScreen from "./components/frame/GameOverScreen";
import GameBoard from "./components/game/GameBoard";
import NPCImage from "./components/game/NPCImage";
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
    if(this.todayLose !== Boolean) { this.todayLose = false; }
    if(this.todaywin !== Boolean) { this.todayWin = false; }
    this.stats = GetStats();
    GetLocalStorage();
    this.todayWin = gameSave.todayWin;
    this.todayLose = gameSave.todayLose;


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
      <Border className='Border' />
      {render}
      </>
    )
  }
}