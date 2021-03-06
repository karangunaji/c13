var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obstacles , obstaclesimage

var o1,o2,o3,o4,o5,o6

var score = 0



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  o1 = loadImage("obstacle1.png")
  o2 = loadImage("obstacle2.png")
  o3 = loadImage("obstacle3.png")
  o4 = loadImage("obstacle4.png")
  o5 = loadImage("obstacle5.png")
  o6 = loadImage("obstacle6.png")
 
 
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("score: "+score ,500,40)
  score = score +Math.round(frameCount / 60)
  
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnobstacles()
  
  drawSprites();

}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnobstacles(){
 if(frameCount % 60 ==0){
   obstacles = createSprite(600,165,30,15);
   obstacles.velocityX = -3
   obstacles.scale = 0.5;
   obstacles.lifetime = 200
   var rand = Math.round(random(1,6))
   switch (rand){
     case 1 : obstacles.addImage(o1);
     break ;

     case 2 : obstacles.addImage(o2);
     break ;
    
     case 3 : obstacles.addImage(o3);
     break
      
     case 4 : obstacles.addImage(o4);
     break ;

     case 5 : obstacles.addImage(o5);
      break

      case 6 : obstacles.addImage(o6);
      break ;
   }

  
   

 }

}