
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld, ground,Paper
var paper

function setup() {
	createCanvas(800, 700);

	myEngine = Engine.create();
	myWorld = myEngine.world;

	paper = new Paper(20,200,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
 paper.display();
}



