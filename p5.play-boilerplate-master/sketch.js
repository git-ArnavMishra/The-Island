var topImage;
var gameState = 0;

function setup() {
  createCanvas(displayWidth-200,displayHeight-240);
  createSprite(400, 200, 50, 50);
}
function preload(){
  topImage = loadImage("Images/Islandasdf.jpg")
}
function draw() {
  background(topImage);
  if(gameState===0){
    textSize(100);
    text("The Island",200,200);
  }
  else if(gameState===1){

  } 
  else if(gameState===2){

  } 
  drawSprites();
}