const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;



function setup() {
  createCanvas(900,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  WreckingBall = new WBall (250, 200);
  slingShot = new SlingShot (WreckingBall.body,{x:250, y:200})

  stand2 = new Stand(450,690,900,10);
 
  //tower one
  block1 = new Block(400,475,70,70);
  console.log(block1);
  block2 = new Block(400,475,70,70);
  block3 = new Block(400,475,70,70);
  block4 = new Block(400,475,70,70);
  block5 = new Block(400,475,70,70);

  //tower two
  block9 = new Block(550,435,70,70);
  block10 = new Block(550,435,70,70);
  block11 = new Block(550,435,70,70);
  block12 = new Block(550,435,70,70);
  block13 = new Block(550,435,70,70);

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  stand2.display();

  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("pink");

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();

  fill("white");
  WreckingBall.display();
  slingShot.display();
 

}

function mouseDragged(){

  Matter.Body.setPosition(WreckingBall.body, {x:mouseX, y:mouseY});

}
