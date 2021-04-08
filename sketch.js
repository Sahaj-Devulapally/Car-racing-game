var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1image,car2image,car4image,car4image,trackimage
var xvelocity,yvelocity
var obstacle,obstacleImg,obstacleGrp
var sound
var goldimage,silverimage,bronzeimage
var finishplayers=0,
pastfinish
function preload(){
car1image=loadImage("images/car1.png")
car2image=loadImage("images/car2.png")
car3image=loadImage("images/car3.png")
car4image=loadImage("images/car4.png")
trackimage=loadImage("images/track.jpg")
obstacleImg=loadImage("images/f1.png")
sound=loadSound("sound/sound_sliding.mp3")
goldimage=loadImage("images/gold.png")
silverimage=loadImage("images/silver.png")
bronzeimage=loadImage("images/bronze.png")
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  xvelocity=0
  yvelocity=0
  obstacleGrp=createGroup()
  for(var r=0;r<6;r++){
    var x=random(250,1100)
    var y=random(-2500,750)
    obstacle=createSprite(x,y,100,100)
    obstacle.addImage(obstacleImg)
    obstacleGrp.add(obstacle)
  }
  }
  


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishplayers===4){
    game.update(2)
  }
  if(gameState===2 && finishplayers===4){
    game.displayrank()
  }
  if(gameState===2){
    game.end()
  }

}
