var database;
var gameState=0;
var playerCount;
var form;
var player;
var game;
var allPlayers;
var playerIndex;
function setup(){
    database=firebase.database()
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
if(gameState==4){
    game.update(1);
}
if(gameState == 1){
    clear();
    game.play();
}
}

