var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;
var arrowsGroup,redsGroup,bluesGroup,pinksGroup,greensGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
arrowsGroup = new Group();
redsGroup = new Group();
bluesGroup = new Group();
pinksGroup = new Group();
greensGroup = new Group();
  
}



function setup() {
  createCanvas(400, 400);
  
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
 
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  
   
  scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
 
     if(arrowsGroup.isTouching(redsGroup)||
        arrowsGroup .isTouching(bluesGroup)||
        arrowsGroup .isTouching(pinksGroup)||
        arrowsGroup .isTouching(greensGroup )){
       score = score + 1;
       arrowsGroup.destroyEach();
       bluesGroup.destroyEach();
       redsGroup.destroyEach();
       pinksGroup.destroyEach();
       greensGroup.destroyEach();
      
     }
     
     
     
  bow.y = World.mouseY
  
   
  if (keyDown("space")) {
    createArrow();
    
  }
  
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }else if (select_balloon == 2){
      greenBalloon();
      }else if (select_balloon == 3){
        blueBalloon();
      } else {
        pinkBalloon();
      }
    }
    
  
 
     
     drawSprites() ;
    text("score :"+score,300,50);
 
}


 

 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrowsGroup.add(arrow); 
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 5;
  red.lifetime = 150;
  red.scale = 0.1;
  redsGroup.add(red);

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20,370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 5;
  blue.lifetime = 150;
  blue.scale = 0.1;
   bluesGroup.add(blue);
}


function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 5;
  green.lifetime = 150;
  green.scale = 0.1;
  greensGroup.add(green);

}


function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 6;
  pink.lifetime = 150;
  pink.scale =1;
pinksGroup.add(pink);
}






