var bwall,wall1,thickness, 
var speed,weight,ullet,bullet1;

function setup() {
 var canvas =  createCanvas(1600,400);
 //canvas.shapeColor = color(80,80,80);

   thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

 car =  createSprite(50,200,25,25);
 bullet = createSprite(10,350,25,25);
 bullet.shapeColor='white';
 wall = createSprite(1200,200,thickness, height/2);
 //wall1 = createSprite(1200,200,60,120);
 wall.shapeColor = color (80,80,80);
}


function draw() {
  background(80,80,80);  

  bullet.velocityX = speed ; 
  bullet1.velocityX = speed ;

  if(wall.x - car.x < wall.width/2 + car.width/2) {
    bullet.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        bullet.shapeColor = color(500,0,0);
        bullet1.shapeColor = color(500,233,0);
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        bullet.shapeColor = color(500,233,0);
        bullet1.shapeColor = color(0,500,0);
      }
      if(deformation < 100 ) 
      {
        bullet.shapeColor = color(0,500,0);
        bullet1.shapeColor = color(500,0,0);
      }
    } 
    hascolided((bullet, wall))
    {
      bullet.velocity=0;
      var damage=0.5 * weight* speed* speed/(thickness *thickness *thickness);
      
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0)
      }
if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
    }
    drawSprites();
  }
  
 