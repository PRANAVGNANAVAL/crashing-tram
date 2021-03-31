const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bog1,bog2,bog3
var flag=0
var train1
function preload(){
 bg=loadImage("images/bg.jpg")

}
function setup(){
createCanvas(1200,400);
engine=Engine.create();
world=engine.world;

ground=new Ground(600,380,1200,20);
bog1=new Boggie(50,170,50,50)
bog2=new Boggie(150,170,50,50)
bog3=new Boggie(250,170,50,50)
bog4=new Boggie(350,170,50,50)
bog5=new Boggie(450,170,50,50)
bog6=new Boggie(550,170,50,50)

rock1=new Rock(1100,200,100,100)
c1=new Chain(bog1.body,bog2.body)
c2=new Chain(bog2.body,bog3.body)
c3=new Chain(bog3.body,bog4.body)
c4=new Chain(bog4.body,bog5.body)
c5=new Chain(bog5.body,bog6.body)
}

function draw(){
background(bg)
Engine.update(engine)
bog1.show();
bog2.show();
bog3.show();
bog4.show();
bog5.show();
bog6.show();
rock1.show();
c1.show();
c2.show();
c3.show();
c4.show();
c5.show();
var collision = Matter.SAT.collides(bog6.body,rock1.body);
 if(collision.collided) { flag=1; }
  if(flag ===1){ textSize(30); stroke(3);
     fill('blue');
      text("CRASH",500,200);
        } } 
        function keyPressed() {
             if(keyCode === RIGHT_ARROW){
                  Matter.Body.applyForce(bog6.body,{x:bog6.body.position.x,y:bog6.body.position.y}, {x:0.5,y:0}); 
                   } }
