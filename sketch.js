
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraints = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	BOX = new Box(400,240,300,20);
	BOB1 = new Bob(270,400);
	ROPE1 = new Rope(BOX.body,BOB1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  BOX.display();
  BOB1.display();
  ROPE1.display();

  drawSprites();
 
}



