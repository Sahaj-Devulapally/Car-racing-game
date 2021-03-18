var hypnoticBall, database;
var position;
var database,gameState=0,playerCount=0,form,player,game

function setup(){
  database = firebase.database();
  game=new Game
  game.getState()
  game.start()
}

function draw(){
if(playerCount==4){
game.update(1)

}
if(gameState===1){
  game.play()
}

}