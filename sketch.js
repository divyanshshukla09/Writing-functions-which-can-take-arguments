
var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3

function setup() {
  createCanvas(1200, 800);


  movingRect = createSprite(800, 400, 80, 30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  gameObject3 = createSprite(200, 100, 60, 60);
  gameObject3.shapeColor = "hotPink";


}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if (isTouching(movingRect, gameObject3)) {
    movingRect.shapeColor = "magenta";
    gameObject3.shapeColor = "yellow"
  }


  else {
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "hotpink"
    fixedRect.shapeColor = "green"
  }


  //bounceOff(movingRect,fixedRect)
  drawSprites();
}




