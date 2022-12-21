export class GameState{
    constructor(){
        this.turnCount = 0;
        this.dateLastPlayed = new Date();
        this.todayWin = false;
        this.todayLose = false;
    }

     SetTurnCount(turnCount){
        this.turnCount = turnCount;
    }

    NewGame(){
        this.turnCount = 0;
        this.dateLastPlayed = new Date();
    }

}
