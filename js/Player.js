class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.xposition=0
    this.place=0
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      xposition:this.xposition,
      place:this.place
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getfinishedplayers(){
    var playersfinish=database.ref('finishedplayers')
    playersfinish.on("value",(data)=>{
      finishplayers=data.val()
    })
  }
  static updatefinishedplayers(){
   database.ref("/").update({finishedplayers:finishedplayers+1})
this.place+=1
  }
  
}

