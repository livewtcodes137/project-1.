
var trex ,trex_running;
function preload(){
 trex_running= loadAnimation("trex1.png","trex3.png","trex4.png") ;

}

function setup(){
  createCanvas(600,200);
  //create a trex sprite
  trex=createSprite(50,145,40,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.7;

  
 
}

function draw(){
  background("black");
if (keyDown("space")){
  trex.velocityY=-8;
 
}
 trex.velocityY=trex.velocityY+0.5;



  drawSprites();

}
