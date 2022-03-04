var player
var sword
var ground
var score = 0

var enemyGroup




function preload(){
  swordImage = loadImage("sword.png")
}

function setup() {
  createCanvas(400, 400);
  ground = createSprite(200, 380, 400, 20)
  ground.shapeColor = "green"
  player = createSprite(200,350,50,50)
  player.shapeColor = "blue"
  sword = createSprite(160,340,10,50)
  sword.addImage(swordImage)
  sword.scale = .20
  sword.setCollider("rectangle", 0, 0, 205, sword.height)
  sword.debug = true
  
  //sword2 = createSprite(160,340,10,50)
  //sword2.addImage(swordImage)
  //sword2.scale = .20
  //sword2.setCollider("rectangle", 0, 0, 50, sword2.height)
  

  enemyGroup = new Group()

  
}

function draw() {
  background(225);

  text("Score: " + score, 325,50)
  
  sword.x = player.x 
  

  if(keyDown("left")){
    player.x = player.x - 5
    sword.x -= 25
 
  } 

  if(keyDown("right")){
    player.x = player.x + 5
    sword.x += 25
  
  }


  

  
  spawnEnemies();

  if(enemyGroup.isTouching(sword)){
    enemyGroup.destroyEach()
    score = score + 1
  }

  drawSprites();


}

function spawnEnemies(){
  if(frameCount % 50 ===0){
  enemies = createSprite(50, 50, 30, 30);
  
  enemies.x = Math.round(random(0,400))
  enemies.y = Math.round(random(330,360))
  enemies.lifetime = 120
  var r = Math.round(random(1,3));
  switch(r){
    case 1:enemies.shapeColor = "red";
    break;
    case 2:enemies.shapeColor = "purple";
    break;
    case 3:enemies.shapeColor = "brown";
    break;
    default: break;
  }
  enemyGroup.add(enemies);

  }


}


