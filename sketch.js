var fr, mr

function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  mr=createSprite(400, 400, 80, 50);
  fr.shapeColor="yellow"
  mr.shapeColor="blue"
}

function draw() {
  background(0);
  
  mr.x=mouseX
  mr.y=mouseY
  
  if(abs(mr.x-fr.x)<mr.width/2+fr.width/2 && abs (mr.y-fr.y)<mr.height/2+fr.height/2){
    fr.shapeColor="red"
    mr.shapeColor="red"  
  }
  else{
    fr.shapeColor="yellow"
  mr.shapeColor="blue"
  }
  drawSprites();
}