var robber
var obstacle
var Score = 0
var obgroup
var robberimg
var gameState = "Start"
var obstacle1
var cactus
var copimg
var dog
var obstacle2
function preload(){

}
function setup(){
    createCanvas(800,600)
robber=createSprite(200,200,20,10)
robber.visible = false
robber.addImage(robberimg)
robber.scale = 0.5
robber.debug = true
robber.setCollider("circle",0,0,40)
obgroup = new Group()
Start=createSprite(300,400,100,20)
Start.shapeColor = "cyan"
fill("Black")
textSize(50)


}
function draw(){
background("cyan")
drawSprites()
fill("Black")
textSize(20)
text("Score = "+ Score,670,50)
if(gameState === "Start"){
text("Escape the Cops",300,100)
text("Start",Start.x-20,Start.y+7)
if(mousePressedOver(Start)){
gameState = "Play"


}

}


if( gameState === "Play"){
Score = Math.round( World.frameCount/30)
robber.visible = true

if(Score > 10 ){
obstacle1()


}
if(Score > 15 ){
    obstacle2()
}

if(keyDown("UP")){
    robber.y=robber.y-2
}
if(keyDown("DOWN")){
robber.y=robber.y+2
}
if(keyDown("RIGHT")){
robber.x=robber.x+2
}
if(keyDown("LEFT")){
robber.x=robber.x-2    
}


if(obgroup.isTouching(robber))
{
gameState = "End"

}

obstacle()
}
else if(gameState === "End"){
    fill("red")
    textSize(20)
    text("Game Over",400,300)
    

}

}


 function preload(){
 robberimg=loadImage("Robberimg1-removebg-.png") 
copimg = loadImage("copimg.png")
cactus = loadImage("cactusimg.png")
Dogimg = loadImage("Dogimg.png")

 }

function obstacle(){
    if(frameCount % 50 === 0){
       var obstacle= createSprite(random(0,800),random(0,600),10,5)
       obstacle.lifetime=360
       obstacle.addImage(copimg)
       obgroup.add(obstacle) 
       obstacle.scale = 0.5
       obstacle.debug = true
       obstacle.setCollider("circle",0,0,40)
    }
    


}
function obstacle1(){
    if(frameCount % 50 === 0){
        var obstacle1= createSprite(random(0,800),random(0,600),10,5)
        obstacle1.lifetime=360
        obstacle1.addImage(cactus)
        obgroup.add(obstacle1) 
        obstacle1.scale = 0.3
        obstacle1.debug = true
        obstacle1.setCollider("circle",0,0,60)

}
}
function obstacle2(){
    if(frameCount % 50 === 0){
        var obstacle2= createSprite(random(0,800),random(0,600),10,5)
        obstacle2.lifetime=360
        obstacle2.addImage(Dogimg)
        obgroup.add(obstacle2)
        obstacle2.scale = 0.3 
        obstacle2.debug = true
        obstacle2.setCollider("circle",0,0,60)



}


}