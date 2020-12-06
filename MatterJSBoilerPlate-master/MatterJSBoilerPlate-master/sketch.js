
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,580,800,20)
	ball = new Ball(100,570,30);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
 
}



