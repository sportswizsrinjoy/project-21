var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(800,400);
  thickness=random(22,83);
 wall= createSprite(1200, 200, thickness, height/2);
 speed=random(223,321);
 weight=random(30,52);
 damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/Thickness of Wall*Thickness of Wall*Thickness of Wall
}

function draw() {
  background(255,255,255); 
  if(damage=< 10){
    wall.shapeColor=red;
  } 
  if(damage=>10){
    wall.shapeColor=green;
  }
  drawSprites();
}