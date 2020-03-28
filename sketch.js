var sun;
var earth;
var sunImage;
var earthImage;
var angle = 2;
var mercury;
var venus;

function preload(){
sunImage = loadImage("sun.png");
earthImage = loadImage("earth.jpg");
venusImage = loadImage("venus.png");
mercuryImage = loadImage("mercury.png");

}

function setup() {
  createCanvas(1200,1200);

sun = createSprite(0,0);
sun.addImage("sun",sunImage);
sun.scale = 0.2;
sun.debug = true;

earth = createSprite(500,50);
earth.addImage("earth",earthImage);
earth.scale = 0.2;
earth.debug = true;

mercury = createSprite(500,300);
mercury.addImage("mercury",mercuryImage);
mercury.scale = 0.6;
mercury.debug = true;

venus = createSprite(500,180);
venus.addImage("venus",venusImage);
venus.scale = 0.2;
venus.debug = true;
}

function draw() {
  background(0);  
angleMode(DEGREES);
translate(600,600);
rotate(angle);
angle = angle+0.2;

if(sun.isTouching(earth)){
  earth.destroy();
}
if(sun.isTouching(mercury)){
    mercury.destroy();
  }
  if(sun.isTouching(venus)){
    venus.destroy();
  }

if(frameCount % 1 === 0){
  sun.scale = sun.scale+0.0005;
}

  drawSprites();
}