
var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1000,400);
  car = createSprite(50, 200, 40, 30);
  car.shapeColor = "white";

  wall = createSprite(900,200,10,200);
  wall.shapeColor = "grey";

  speed = random(50,90);
  weight = random(500,1500);

  car.velocityX = speed;
}

function draw() {
  background("lightblue");  

  
  if(isTouching(wall,car))
  {
    car.velocityX = 0;
    car.x = 890;
    car.y = 200;
    deformation = 0.5*weight*speed*speed/22500; 
    console.log(deformation)
      if(deformation>180){
        car.shapeColor = "red";
      }
      if(80<deformation<180){
        car.shapeColor = "yellow";
      }
      if(deformation<80) {
        car.shapeColor = "green";
      }

      
  }


  drawSprites();
}

function isTouching(ob1,ob2){
  if(ob1.x-ob2.x < ob1.width/2 + ob2.width/2 &&
    ob2.x-ob1.x < ob1.width/2 + ob2.width/2 &&
    ob1.y-ob2.y < ob1.height/2 + ob2.height/2 &&
    ob2.y-ob1.y < ob1.height/2 + ob2.height/2 ){
      return true;
    }else{
      return false;
    }
}