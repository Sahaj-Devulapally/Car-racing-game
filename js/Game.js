class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      pastfinish=false
    }

    car1 = createSprite(100,200);
    car1.addImage(car1image)
    car2 = createSprite(300,200);
    car2.addImage(car2image)
    car3 = createSprite(500,200);
    car3.addImage(car3image)
    car4 = createSprite(700,200);
    car4.addImage(car4image)
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
            background(rgb(198,135,103));
        image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 180;
      var y;
     
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
       
        //position the cars a little away from each other in x direction
        x =  200+(index*200)+allPlayers[plr].xposition
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x=x
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
      
          if(cars[index-1].isTouching(obstacleGrp)){
            yvelocity-=0.6
            sound.play()
          }
        }
     
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
      

    }
    if(player.xposition<350|| player.xposition>1000){ 
     xvelocity=0
     }
if(player.distance<300){
if(keyIsDown(UP_ARROW)&& player.index!==null){
yvelocity+=0.9

if(keyIsDown(LEFT_ARROW)){
  xvelocity-=0.8
}
if(keyIsDown(RIGHT_ARROW)){
  xvelocity+=0.8
}
}
else if(keyIsDown(UP_ARROW)&& yvelocity>0  &&  player.index!==null){
  yvelocity-=0.1
  xvelocity*=0.9
}
else{
  yvelocity*=0.9
  xvelocity*=0.9
}
}else if(pastfinish===false){
  yvelocity*=0.6
  xvelocity*=0.6
  Player.updatefinishedplayers()
  player.place=finishplayers
  player.update()
  pastfinish=true
}else{
  yvelocity*=0.6
  xvelocity*=0.6
}
player.distance+=yvelocity 
yvelocity*=0.9
player.xposition+=xvelocity
xvelocity*=0.9
player.update()
pastfinish=false
    drawSprites();}
    end(){
      console.log("end")
    }
  displayrank(){
    console.log("helo")
    camera.position.x=0
    camera.position.y=0
    imageMode(CENTER)
    Player.getPlayerInfo()
    image(bronzeimage,displayWidth/-4,displayHeight/10)
    image(silverimage,displayWidth/+4,displayHeight/10)
    image(goldimage,0,displayHeight/10)
    textSize(30)
    for(var plr  in allPlayers){
      if(allPlayers[plr].place===1){
        text("1st place-"  +allPlayers[plr].name,0,85)
      }   else if(allPlayers[plr].place===2){
        text("2nd place-"  +allPlayers[plr].name,displayWidth/4,displayHeight/10+100)
      } else if(allPlayers[plr].place===3){
        text("3rd place-"  +allPlayers[plr].name,displayWidth/-4,displayHeight/10+100)
      }else{
        text("honourable mention"  +allPlayers[plr].name,0,255)
      }
    }
    
  }
}

