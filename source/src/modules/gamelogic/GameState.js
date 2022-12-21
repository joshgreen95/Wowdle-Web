class GameState {
    constructor(turnCount){
        this.turnCount = turnCount;
        this.dateLastPlayed = new Date();
    }

     SetTurnCount(turnCount){
        this.turnCount = turnCount;
    }

    NewGame(){
        this.turnCount = 0;
        this.dateLastPlayed = new Date();
    }
}

export var currentGameState = new GameState;