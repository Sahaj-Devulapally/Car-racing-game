class Form{

constructor(){
this.input=createInput("Name")
this.button=createButton("Play")
this.greeting=createElement("h3")

}
display(){
var title=createElement("h1")
title.html("Car Racing Game")
title.position(275,40)
this.input.position(230,200)
this.button.position(400,200)
this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name=this.input.value()
playerCount++
player.index=playerCount
player.update()
player.updateCount(playerCount)
this.greeting.html("Hello "+ player.name)
this.greeting.position(200,200)
})
}
hide(){
this.greeting.hide()
this.input.hide()
this.button.hide()
}






}